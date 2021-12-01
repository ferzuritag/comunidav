import React from 'react'
import { Link } from 'react-router-dom'

export const EventListItem = ({id="0",asociation="",name="", datetime="",image=""}) => {
    return (
        <Link className="event-list-item" to= {`./events/${id}`}>
            <img src={image} className="event-img"></img>
            <p>{asociation}</p>
            <h2>{name}</h2>
            <p>{datetime}</p>
        </Link>
    )
}
