import React from 'react'
import { Link } from 'react-router-dom'

export const UsersListItem = ({id,name,user,path}) => {
    return (
        <Link className = "users-screen__user-item animate__animated animate__fadeIn" to={ `./users/${ id }` }>
            <img alt = " " src = {path}className = "user-img img-s"/>
            <div>
            <p className = "users-screen__user-item-name">{name}</p>
            <p className = "users-screen__user-item-type">{user}</p>
            </div>
        </Link>
    )
}
