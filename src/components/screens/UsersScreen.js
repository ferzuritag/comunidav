
import React, { useEffect, useState } from 'react';
import { getCitysByState } from '../../helpers/getCitysByState';
import { getCountries } from '../../helpers/getCountries';
import { getStatesByCountry } from '../../helpers/getStatesByCountry';
import { getUsers } from '../../helpers/getUsers';
import { Search } from '../others/Search';
import { UsersList } from './UsersScreen/UsersList';
export const UsersScreen = () => {
    const [users, setUsers] = useState([])
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selected, setSelected] = useState({
        city: 'menu-name',
        state: 'menu-name',
        country: 'menu-name',
        search: '',
    });

    const handleSelectChange = ({ target }) => {
        setSelected({
            ...selected,
            [target.name]: target.value
        });
    }

    const handleSearch = async(e) =>{
        e.preventDefault();
        setUsers(await getUsers({
            username: selected.search,
            country: selected.country,
            state: selected.state,
            city: selected.city,
        }))
        console.log(`${selected.search} ${selected.country} ${selected.state} ${selected.city}`)
    }

    useEffect(() => {
        (async () => {
            setCountries(await getCountries());
            setUsers(await getUsers({}))

        })();
    }, [])

    useEffect(() => {
        (async () => {
            setStates(await getStatesByCountry(selected.country));
            setSelected({
                ...selected,
                city: 'menu-name',
                state: 'menu-name',
            })
            setCities([]);
        })();

    }, [selected.country])

    useEffect(() => {
        (async () => {
            setCities(await getCitysByState(selected.state));
            setSelected({
                ...selected,
                city: 'menu-name',
            })
        })();

    }, [selected.state]);

    return (
        <div className="users-screen__body">

            <div className="users-screen__menu-container">

                <select value={selected.country} className="select-menu" onChange={handleSelectChange} name="country">
                    <option value="menu-name" >Pais</option>
                    {countries.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}

                </select>

                <select value={selected.state} className="select-menu" onChange={handleSelectChange} name="state">
                    <option value="menu-name" >Estado</option>
                    {states.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}

                </select>

                <select value={selected.city} className="select-menu" onChange={handleSelectChange} name="city">
                    <option value="menu-name" >Municipio</option>
                    {cities.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            
            <Search className = "search_container mt-s " onChangeSearch = {handleSelectChange} onSearch = {handleSearch} Search = {selected.search}/>
            <UsersList className = "users-screen__users-list mt-b" users = {users}/>
        </div>
    )
}
