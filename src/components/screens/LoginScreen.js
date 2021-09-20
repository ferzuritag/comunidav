import React from 'react'
import { Banner } from '../others/Banner'
import { Footer } from '../others/Footer'

export const LoginScreen = () => {
    return (
        <div>
            <Banner />
            <div className = "login__body">

                <div className="login__login-box">
                    <h1 className=" title login__title"> Iniciar Sesion</h1>
                    <form >
                        <input className=" input login__input" type="text" placeholder="Usuario" />
                        <input className=" input login__input" type="text" placeholder="Contrasena" />
                        <div>
                            <input type="checkbox" />
                            <label for="checkbox">Recordar Contrasena</label>
                        </div>
                        <button className="btn btn-submit login__btn">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
