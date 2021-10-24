import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { deleteAsoc } from '../../helpers/deleteAsoc';
import { getAsocsById } from '../../helpers/getAsocsById';
import { getCategories } from '../../helpers/getCategories';
import { updateAsoc } from '../../helpers/updateAsoc';
export const SelectedAsoc = ({history}) => {
    const { asocID } = useParams();
    const [categories, setCategories] = useState([]);
    const [asocData, setAsocData] = useState({
        "id": asocID,
        "name": "Cargando...",
        "description": "Cargando...",
        "category": "Cargando...",
    });
    const { id,name,description,category } = asocData;

    useEffect(() => {
        (async () => {
            const userData = await getAsocsById(id)
            setAsocData(userData);
            const categories = await getCategories();
            setCategories(categories);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const handleChange = (e) =>{
        setAsocData({
            ...asocData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSave = async(e) =>{
        e.preventDefault();
        const resp = await updateAsoc(asocData);
        await alert(resp);
        history.replace('/asocs');
    }

    const handleDelete = async(e) =>{
        var option = window.confirm("¿Esta seguro que desea eliminar?");
        if (option === true) {
            const resp = await deleteAsoc(id);
            await alert(resp);
            history.replace('/asocs');
        }
    }
    return (
        <div className="selected-user__container">
            <form className="selected-user__form">
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Nombre</label>
                    <input className="input selected-user__input" type="text" placeholder="ej. comunidav99" value={name} onChange = {handleChange} name = "name"/>
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label" >Descripcion</label>
                    <textarea className="input selected-asoc__text-area" type="text" placeholder="ej. comunidav99" value={description} onChange = {handleChange} name = "description"/>
                </div>
                <div className=" selected-user__group">
                    <label className="selected-user__label">Categoria</label>
                    <select value = {category} className="select-menu" onChange = {handleChange} name = "category">
                        <option value="menu-name" >Categoria</option>
                        {categories.map((item) => (
                            <option key = {item.id} value={item.id}>{item.name}</option>
                        ))}

                    </select>
                </div>
                <span className="user-select__button-group">
                    <button className="btn btn-del selected-user__button" onClick = {handleDelete} type="button">Eliminar</button>
                    <button className="btn btn-submit selected-user__button" onClick = {handleSave} type="button">Aceptar</button>
                </span>
                
            </form>
        </div>
    )
}
