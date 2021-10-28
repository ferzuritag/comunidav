export const Chat = () =>{
    const webUri = 'ws://localhost:8000';
    var conn = new WebSocket(webUri);

    conn.onopen = (e) =>{
        console.log("Conectado")
    }

    conn.onmessage = (e) =>{
        console.log(e.data)
    }
    conn.send();
}