import React from 'react'
import { UsersListItem } from './UsersListItem';

export const UsersList = ({className, users = [], setSelected }) => {
    const changeSelected = (e) =>{
        setSelected(e.target.id);
    }
    return (
        <ul className = {className}>
            {users.length === 0 ?
            <p className = "no-result">Sin resultados</p>
            :
            users.map( (user) =>(
                <UsersListItem onClick = {changeSelected} key = {user.id} {...user}/>
            ))}
        </ul>
    )
}
