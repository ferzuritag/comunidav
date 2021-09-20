import React from 'react'
import { UsersListItem } from './UsersListItem';

export const UsersList = ({className, users = []}) => {
    return (
        <ul className = {className}>
            {users.length === 0 ?
            <p className = "no-result">Sin resultados</p>
            :
            users.map( (user) =>(
                <UsersListItem key = {user.id} {...user}/>
            ))}
        </ul>
    )
}
