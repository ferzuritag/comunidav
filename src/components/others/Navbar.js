import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../../assets/ComunidavLogo.svg'
export const Navbar = () => {
    return (
        <nav className="navbar">
            <img alt = " " className="logo" src={Logo} />
            <div className = "link_group">
                <Link className="link" to="/users">Usuarios</Link>
                <Link className="link" to="/support">Soporte</Link>
            </div>

            <Link className="link" exact to="/login">Cerrar Sesion</Link>

        </nav>
    )
}
