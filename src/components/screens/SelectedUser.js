import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCitysByState } from "../../helpers/getCitysByState";
import { getCountries } from "../../helpers/getCountries";
import { getStatesByCountry } from "../../helpers/getStatesByCountry";
import { getUserById } from "../../helpers/getUserById";
import validator from "validator";
import { updateUser } from "../../helpers/updateUser";
import { deleteUser } from "../../helpers/deleteUser";
export const SelectedUser = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { userID } = useParams();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [userData, setUserData] = useState({
    id: userID,
    name: "",
    lastName: "",
    lastName2: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    path: "",
  });
  const {
    id,
    name,
    lastName,
    lastName2,
    username,
    email,
    phone,
    city,
    state,
    country,
    path,
  } = userData;

  useEffect(() => {
    (async () => {
      const userData = await getUserById(userID);
      setUserData(userData);
      setCountries(await getCountries());
      setStates(await getStatesByCountry(userData.country.toString()));
      setCities(await getCitysByState(userData.state.toString()));
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeCountry = ({ target }) => {
    setUserData({
      ...userData,
      state: "menu-name",
      city: "menu-name",
      country: target.value,
    });
    (async () => {
      setStates(await getStatesByCountry(target.value));
    })();
    setCities([]);
  };

  const onChangeState = ({ target }) => {
    setUserData({
      ...userData,
      state: target.value,
      city: "menu-name",
    });
    (async () => {
      setCities(await getCitysByState(target.value));
    })();
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (username.length < 5) {
      alert("Usuario muy corto");
    } else if (validator.isEmpty(name)) {
      alert("Rellene su campo Nombre");
    } else if (validator.isEmpty(lastName)) {
      alert("Rellene su campo Apellido Paterno");
    } else if (validator.isEmpty(lastName2)) {
      alert("Rellene su campo Apellido Materno");
    } else if (!validator.isEmail(email)) {
      alert("Escriba su correo correctamente");
    } else if (!validator.isInt(phone)) {
      alert("Rellene correctamente su campo Telefono");
    } else if (country === "menu-name") {
      alert("Seleccione un pais");
    } else if (state === "menu-name") {
      alert("Seleccione un Estado");
    } else if (city === "menu-name") {
      alert("seleccione un Municipio");
    } else {
      const resp = await updateUser(userData);
      await alert(resp);
      history.replace("/users");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    var option = window.confirm("¿Esta seguro que desea eliminar?");
    if (option === true) {
      const data = await deleteUser(id);
      const{error,message} = data;
      console.log(await data)
      if (error == false) {
        await alert(message);
        history.replace("/users");
      }else{
        alert(message);
      }
    }
  };
  return (
    <div className="selected-user__container ">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <form className="selected-user__form animate__animated animate__fadeIn">
          <img alt=" " src={path} className="user-img img-b mb-b" />
          <div className=" selected-user__group">
            <label className="selected-user__label">Usuario</label>
            <input
              className="input selected-user__input"
              type="text"
              placeholder="ej. comunidav99"
              value={username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className=" selected-user__group">
            <label className="selected-user__label">Nombre</label>
            <input
              className="input selected-user__input"
              type="text"
              placeholder="ej. comunidav99"
              value={name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className=" selected-user__group">
            <label className="selected-user__label">Apellido Paterno</label>
            <input
              className="input selected-user__input"
              type="text"
              placeholder="ej. comunidav99"
              value={lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <div className=" selected-user__group">
            <label className="selected-user__label">Apellido Materno</label>
            <input
              className="input selected-user__input"
              type="text"
              placeholder="ej. comunidav99"
              value={lastName2}
              onChange={handleChange}
              name="lastName2"
            />
          </div>
          <div className=" selected-user__group">
            <label className="selected-user__label">Correo</label>
            <input
              className=" input selected-user__input"
              type="text"
              placeholder="ej. comunidav@hotmail.com"
              value={email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Telefono</label>
            <input
              className=" input selected-user__input"
              type="text"
              placeholder="ej. 8348288134"
              value={phone}
              onChange={handleChange}
              name="phone"
            />
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Pais</label>
            <select
              value={country}
              className="select-menu"
              onChange={onChangeCountry}
              name="country"
            >
              <option value="menu-name">Pais</option>
              {countries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Estado</label>
            <select
              value={state}
              className="select-menu"
              onChange={onChangeState}
              name="state"
            >
              <option value="menu-name">Estado</option>
              {states.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Municipio</label>
            <select
              value={city}
              className="select-menu"
              onChange={handleChange}
              name="city"
            >
              <option value="menu-name">Municipio</option>
              {cities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <span className="user-select__button-group">
            <button
              className="btn btn-del selected-user__button"
              onClick={handleDelete}
              type="button"
            >
              Eliminar
            </button>
            <button
              className="btn btn-submit selected-user__button"
              onClick={handleSave}
              type="button"
            >
              Aceptar
            </button>
          </span>
        </form>
      )}
    </div>
  );
};
