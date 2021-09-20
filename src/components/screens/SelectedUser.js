import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getCitysByState } from '../../helpers/getCitysByState';
import { getCountries } from '../../helpers/getCountries';
import { getStatesByCountry } from '../../helpers/getStatesByCountry';
import { getUserById } from '../../helpers/getUserById';

export const SelectedUser = () => {
    const { userID } = useParams();
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userData, setUserData] = useState({
        "id": "Cargando...",
        "name": "Cargando...",
        "lastName1": "Cargando...",
        "lastName2": "Cargando...",
        "user": "Cargando...",
        "email": "Cargando...",
        "phone": "Cargando...",
        "city": "Cargando...",
        "state": "Cargando...",
        "country": "Cargando...",
        "path": "Cargando...",
    });
    console.log(userData)
    const { name, lastName1, lastName2, user, email, phone, city,state,country, path } = userData;
    useEffect(() => {
        (async () => {
            setUserData(await getUserById(userID));
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setCountries(await getCountries());
            setStates(await getStatesByCountry(country));
            setCities(await getCitysByState(state));
        })();
    }, [userData])
    const handleSelectChange = ({ target }) => {
    }
    return (
        <div className="selected-user__container">
            <form className="selected-user__form">
                <img alt=" " src={path} className="user-img img-b mb-b" />
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Usuario</label>
                    <input className="input selected-user__input" type="text" placeholder="ej. comunidav99" value={user} />
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Nombre</label>
                    <input className="input selected-user__input" type="text" placeholder="ej. comunidav99" value={name} />
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Apellido Paterno</label>
                    <input className="input selected-user__input" type="text" placeholder="ej. comunidav99" value={lastName1} />
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Apellido Materno</label>
                    <input className="input selected-user__input" type="text" placeholder="ej. comunidav99" value={lastName2} />
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label">Correo</label>
                    <input className=" input selected-user__input" type="text" placeholder="ej. comunidav@hotmail.com" value={email} />
                </div>

                <div className=" selected-user__group">
                    <label className="selected-user__label">Telefono</label>
                    <input className=" input selected-user__input" type="text" placeholder="ej. 8348288134" value={phone} />
                </div>

                <div className=" selected-user__group">
                    <label className="selected-user__label">Pais</label>
                    <select value={country} className="select-menu" onChange={handleSelectChange} name="country">
                        <option value="menu-name" >Pais</option>
                        {countries.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}

                    </select>
                </div>

                <div className=" selected-user__group">
                    <label className="selected-user__label">Estado</label>
                    <select value={state} className="select-menu" onChange={handleSelectChange} name="country">
                        <option value="menu-name" >Estado</option>
                        {states.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}

                    </select>
                </div>

                <div className=" selected-user__group">
                    <label className="selected-user__label">Municipio</label>
                    <select value={city} className="select-menu" onChange={handleSelectChange} name="country">
                        <option value="menu-name" >Pais</option>
                        {cities.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}

                    </select>
                </div>


                <span className="user-select__button-group">
                    <button className="btn btn-del selected-user__button">Eliminar</button>
                    <button className="btn btn-submit selected-user__button">Aceptar</button>
                </span>
            </form>
        </div>
    )
}
