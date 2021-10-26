import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/ComunidavLogo.svg'
import { Logout } from '../../helpers/Logout';
export const Navbar = () => {
    const history = useHistory();
    const handleLogout = async() => {
        const error = await Logout(sessionStorage.getItem("SESSID"));
        if (!error) {
            sessionStorage.removeItem("SESSID");
            history.go(0);
        } else {
            const response = window.confirm("¿Hubo un error al cerrar Sesion, continuar de todos modos?");
            if (response) {
                sessionStorage.removeItem("SESSID");
                history.go(0);
            }
        };
    }
    return (
        <nav className="navbar">
            <img alt=" " className="logo" src={Logo} />
            <div className="link_group">
                <Link className="link" to="/asocs">Asociaciones</Link>
                <Link className="link" to="/users">Usuarios</Link>
                <Link className="link" to="/support">Soporte</Link>
            </div>
            <Link className="link" to="/login" onClick={handleLogout}>Cerrar Sesion</Link>
        </nav>
    )
}
