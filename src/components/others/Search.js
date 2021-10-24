import React from 'react'
import SearchImg from '../../assets/Search.svg';
export const Search = ({className, Search, onChangeSearch, onSearch}) => {
    return (
        <form className = {className} onSubmit = {onSearch}>
            <input className = "input search users_screen__input-search" type = "text" placeholder = "Buscar..." value = {Search}  onChange = {onChangeSearch} name = "search" autoComplete="off"/>
            <button className = "search_button ml-s" >
                <img src = {SearchImg} alt = ""/>
            </button>
        </form>
    )
}
