import React from "react";

export const Cpattcom = () => {
  return (
    <div className="login__viewport">
      <div className="login__card">
        <form className="login__card">
          <label>Usuario</label>
          <input className="login__input" type="text" />
          <label>Contrasena</label>
          <input className="login__input" type="text" />
          <button className="login__button">Enviar</button>
          <a>Olvidaste tu contrasena?</a>
        </form>
      </div>
    </div>
  );
};
