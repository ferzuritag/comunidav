import React, { useState, useMemo, useRef, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { getSupportInbox } from '../../helpers/getSupportInbox';
import { getSupportInboxFrom } from '../../helpers/getSupportInboxFrom';
import { UsersList } from './SupportChat/UsersList';

export const SupportScreen = () => {
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8080');
  const [usersList, setusersList] = useState([])
  const [messageHistorial, setmessageHistorial] = useState([])
  const [message, setMessage] = useState({
    type: "msg-support",
    content: '',
  });
  const [selectedUser, setSelectedUser] = useState(0);
  const [messageHistory, setMessageHistory] = useState([])

  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  useEffect(() => {
    sendMessage(JSON.stringify({
      type: 'login_Support',
      content: sessionStorage.getItem("SESSID")
    }));
  }, [])
  /*const handleClickChangeSocketUrl = useCallback(() =>
    setSocketUrl('wss://demos.kaazing.com/echo'), []);

  const handleClickSendMessage = useCallback(() =>
    sendMessage('Hello'), []);*/

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleMsgChange = (e) => {
    setMessage({
      ...message,
      content: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(JSON.stringify(message));
  };
  useEffect(() => {
    (async () => {
      const supportInbox = await getSupportInbox();
      console.log(supportInbox)
      setusersList(supportInbox);
    })();
  }, [])
  useEffect(() => {
    (async () => {
      setMessageHistory([]);
      const supportInbox = await getSupportInboxFrom(selectedUser);
      setMessageHistory(supportInbox);
    })();
  }, [selectedUser]);

  useEffect(() => {
    //if (lastMessage.from === selectedUser) {
      messageHistory.push(lastMessage);
    //}

  }, [lastMessage]);
  return (
    <div className="support-screen__container">
      <UsersList className="support-screen__users-list" users={usersList} setSelected={setSelectedUser} />
      <div className="support-screen__chat">
        <form className="support-screen__chat-msgbar">
          <input className="input support-screen__chat-input" placeholder="Escribe un mensaje..." value={message.content} onChange={handleMsgChange} />
          <button className="btn btn-submit support-screen__send-btn" onClick={handleSubmit}>Enviar</button></form>
        <ul className="support-screen__msg-container">

          {
            messageHistory ?
              messageHistory
                .map((message, from, idx) =>
                  message
                    ?
                    from === 0 ?
                      <div className="support-screen__msg-self" key={idx}>{message ? `Tu dices :${message.data}` : null}</div>
                      :
                      <div className="support-screen__msg-other" key={idx}>{message ? `El dice :${message.data}` : null}</div>
                    :
                    null)
              :
              null
          }
        </ul>
      </div>
    </div>
  )
}
