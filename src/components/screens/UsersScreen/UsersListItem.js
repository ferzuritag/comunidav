import React from 'react'
import { Link } from 'react-router-dom'

export const UsersListItem = ({id,name,username,path}) => {
    return (
        <Link className = "users-screen__user-item animate__animated animate__fadeIn" to={ `./users/${ id }` }>
            <img alt = " " src = {path}className = "user-img img-s" />
            <div>
            <p className = "users-screen__user-item-name">{name}</p>
            <p className = "users-screen__user-item-type">{username}</p>
            </div>
        </Link>
    )
}
