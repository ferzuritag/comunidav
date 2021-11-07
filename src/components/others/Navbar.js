import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/ComunidavLogo.svg'
import { Logout } from '../../helpers/Logout';
export const Navbar = () => {
    const history = useHistory();
    const [linkStyles, setlinkStyles] = useState({
        asocs: "",
        users: "",
        support: "",
    })
    const {location:{pathname}} = history;
    useEffect(() => {
        
    if (pathname === "/asocs") {
        setlinkStyles({
            support: "",
            users: "",
            asocs: "link-selected"
        }); 
    } else if(pathname === "/users"){
        setlinkStyles({
            support: "",
            users: "link-selected",
            asocs: ""
        }); 
    }else if(pathname === "/support"){
        setlinkStyles({
            support: "link-selected",
            users: "",
            asocs: ""
        }); 
    }
    }, [history])
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
                <Link className= {"link " + linkStyles.asocs} to="/asocs">Asociaciones</Link>
                <Link className={"link " + linkStyles.users} to="/users">Usuarios</Link>
                <Link className={"link " + linkStyles.support} to="/support">Soporte</Link>
            </div>
            <Link className="link" to="/login" onClick={handleLogout}>Cerrar Sesion</Link>
        </nav>
    )
}
