import React from 'react'
import { AsocsListItem } from './AsocsListItem';

export const AsocsList = ({className, asocs = []}) => {
    return (
        <ul className = {className}>
            {asocs.length === 0 ?
            <p className = "no-result">Sin resultados</p>
            :
            asocs.map( (user) =>(
                <AsocsListItem key = {user.id} {...user}/>
            ))}
        </ul>
    )
}
