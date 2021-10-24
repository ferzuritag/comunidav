import React from 'react'
import { Link } from 'react-router-dom'

export const AsocsListItem = ({id,name,description}) => {
    return (
        <Link className = "users-screen__user-item animate__animated animate__fadeIn" to={ `./asocs/${ id }` }>

            <div>
            <p className = "users-screen__user-item-name">{name}</p>
            <p className = "users-screen__user-item-type">{description}</p>
            </div>
        </Link>
    )
}
