import React from "react"
import { Link } from "react-router-dom"
export const UsersListItem = ({id,name,user,path,onClick}) => {
    return (
        <Link className = "users-screen__user-item animate__animated animate__fadeIn" id = {id} onClick = {onClick}>
            <img alt = " " src = {path}className = "user-img img-s" />
            <div>
            <p className = "users-screen__user-item-name">{name}</p>
            <p className = "users-screen__user-item-type">{user}</p>
            </div>
        </Link>
    )
}
