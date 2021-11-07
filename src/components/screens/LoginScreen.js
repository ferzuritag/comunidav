import React, { useState } from "react";
import { useHistory } from "react-router";
import { Login } from "../../helpers/Login";
import { Banner } from "../others/Banner";
import { Footer } from "../others/Footer";

export const LoginScreen = () => {
  const history = useHistory();
  const [disable, setDisable] = useState(false);
  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
  });
  const { user, password } = loginData;

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setDisable(true);
    const { error, data, message } = await Login(loginData);
    console.log(data)
    if (!error) {
      sessionStorage.setItem("SESSID", data.token);
      history.go(0);
    } else {
      alert(message);
    }
    setDisable(false);
  };
  return (
    <div>
      <Banner />
      <div className="login__body">
        <div className="login__login-box">
          <h1> Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <input
              className=" input login__input"
              type="text"
              placeholder="Usuario"
              value={user}
              onChange={handleChange}
              name="user"
              autoComplete="off"
            />
            <input
              className=" input login__input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
            />

            <button
              className="btn btn-submit login__btn"
              disabled={disable}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
