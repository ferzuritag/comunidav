import React, { useEffect, useState } from "react";
import { getCitysByState } from "../../helpers/getCitysByState";
import { getCountries } from "../../helpers/getCountries";
import { getStatesByCountry } from "../../helpers/getStatesByCountry";
import { getUsers } from "../../helpers/getUsers";
import { Search } from "../others/Search";
import { UsersList } from "./UsersScreen/UsersList";
export const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState({
    country: "i",
    city: "i",
    state: "i",
    search: "",
  });

  const handleSelectChange = ({ target }) => {
    setSelected({
      ...selected,
      [target.name]: target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    (async () => {
      const { error, message, data } = await getUsers({
        username: selected.search,
        country: selected.country,
        state: selected.state,
        city: selected.city,
      });
      if (error == false) {
        setUsers(data);
      } else{
          alert(message);
      }
    })();
  };

  const onChangeCountry = ({ target }) => {
    setSelected({
      ...selected,
      state: "i",
      city: "i",
      country: target.value,
    });
    (async () => {
      setStates(await getStatesByCountry(target.value));
    })();
    setCities([]);
  };

  const onChangeState = ({ target }) => {
    setSelected({
      ...selected,
      city: "i",
      state: target.value,
    });
    (async () => {
      setCities(await getCitysByState(target.value));
    })();
    setCities([]);
  };

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
      const {data} = await getUsers({});
      setUsers(data);
    })();
    return () => {
      setCountries(null);
      setCities(null);
      setStates(null);
      setUsers(null);
    };
  }, []);
  //El valor i en opciones es para index, es necesario que sea un caracter para que funcione la comparacion
  return (
    <div className="users-screen__body">
      <div className="users-screen__menu-container">
        <select
          value={selected.country}
          className="select-menu"
          onChange={onChangeCountry}
          name="country"
        >
          <option value="i">Pais</option>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          value={selected.state}
          className="select-menu"
          onChange={onChangeState}
          name="state"
        >
          <option value="i">Estado</option>
          {states.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          value={selected.city}
          className="select-menu"
          onChange={handleSelectChange}
          name="city"
        >
          <option value="i">Municipio</option>
          {cities.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <Search
        className="search_container mt-s "
        onChangeSearch={handleSelectChange}
        onSearch={handleSearch}
        Search={selected.search}
      />
      <UsersList className="users-screen__users-list mt-b" users={users} />
    </div>
  );
};
