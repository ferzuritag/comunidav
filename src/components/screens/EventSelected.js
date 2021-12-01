import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getEvent } from '../../helpers/getEvent';

export const EventSelected = () => {
    const { eventID } = useParams();
    const [data, setData] = useState({
        name:"",
        description:"",
        datetime:"",
        image:"",
        requirements:""
    })
    useEffect(() => {
        (async () => {
            const { error, message, data } = await getEvent(eventID);
            if (error === false) {
              setData(data);
            } else {
              alert(message);
            }
          })();
    }, [])
    const {name,description,datetime,image,requirements} = data;
    return (
        <div className = "full-body flex-center">
            <div className = "card selected-event__card flex-column-center">
                <img src={image} className = "img-b"/>
                <strong>Nombre: </strong>
                <h1>{name}</h1>
                <strong>Descripción: </strong>
                <p>{description}</p>
                <strong>Fecha y Hora: </strong>
                <p>{datetime}</p>
                <strong>Requisitos: </strong>
                <p>{requirements}</p>

            </div>
        </div>
    )
}
