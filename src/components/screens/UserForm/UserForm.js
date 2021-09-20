import React from 'react'
import { info } from './info';
export const UserForm = () => {
    return (
        <form className="users-screen__form">
            <img className="user-img img-b" />
            <button className = "btn btn-ver users-screen__btn-ver">Verificar</button>
            {info.map((i) => (
                <div className="users-screen__group">
                    <label className="users-screen__label">{i}</label>
                    <input className="input users-screen__input" type="text" placeholder={i} />
                </div>

            ))}
            <div className = "users-screen__btn-group">
                <button className="btn btn-del users-screen__btn">Eliminar</button>
                <button className="btn btn-submit users-screen__btn">Aceptar</button>
            </div>
        </form>
    )
}
