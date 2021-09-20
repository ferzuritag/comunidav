import React, { useEffect } from 'react'

export const Menu = ({state, onChange, name }) => {
    const {options} = state;

    useEffect(() => {
    }, [state])
    return (
        <select value = {state.selected} className = "select-menu" onChange = {(e) => onChange(e)}>
            <option value = "menu-name"selected disabled>{name}</option>
            {options.map( (item) =>(
                <option value = {item.id}>{item.name}</option>
            ))}
        </select>
    )
}
