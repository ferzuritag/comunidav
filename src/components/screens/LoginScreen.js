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
    if (error === false) {
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
          <h1 className=" title login__title"> Iniciar Sesion</h1>
          <form>
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
              placeholder="Contrasena"
              value={password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
            />

            <button
              className="btn btn-submit login__btn"
              onClick={handleLogin}
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
