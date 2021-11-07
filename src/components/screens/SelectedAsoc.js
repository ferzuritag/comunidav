import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { deleteAsoc } from "../../helpers/deleteAsoc";
import { getAsocsById } from "../../helpers/getAsocsById";
import { updateAsoc } from "../../helpers/updateAsoc";
import validator from "validator";
import { categories } from "./AsocsScreen/categories";
export const SelectedAsoc = ({ history }) => {
  const { asocID } = useParams();
  // const [categoriesList, setCategories] = useState(categories);
  const [asocData, setAsocData] = useState({
    id: asocID,
    name: "",
    description: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id, name, description, category } = asocData;

  useEffect(() => {
    (async () => {
      const { error, data: asocData } = await getAsocsById(id);
      if (!error) {
        setAsocData(asocData);
      }
      setIsLoading(false);
    })();
  }, [id]);

  const handleChange = (e) => {
    setAsocData({
      ...asocData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (name.length < 6) {
      alert("El nombre debe ser minimo de 6 caracteres");
    } else if (description.length < 6) {
      alert("La descripcion debe ser minimo de 6 caracteres");
    } else if (!validator.isInt(category.toString())) {
      alert("Por favor elija una categoria");
    } else {
      const { error, message } = await updateAsoc(asocData);
      if (!error) {
        await alert(message);
        history.replace("/asocs");
      } else {
        await alert(message);
      }
    }
  };

  const handleDelete = async (e) => {
    var option = window.confirm("¿Esta seguro que desea eliminar?");
    if (option === true) {
      const { error, message } = await deleteAsoc(id);
      if (error) {
        await alert(message);
      } else {
        alert(message);
        history.replace("/asocs");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>
      </div>
    );
  } else {
    return (
      <div className="selected-asoc__body">
        <form className="selected-user__form animate__animated animate__fadeIn">
          <div className=" selected-user__group">
            <label className="selected-user__label">Nombre</label>
            <input
              className="input selected-user__input"
              type="text"
              placeholder="ej. Comunidav"
              value={name}
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Descripcion</label>
            <textarea
              className="input selected-asoc__text-area"
              type="text"
              value={description}
              onChange={handleChange}
              name="description"
            />
          </div>

          <div className=" selected-user__group">
            <label className="selected-user__label">Categoria</label>
            <select
              value={category}
              className="select-menu"
              onChange={handleChange}
              name="category"
            >
              <option value="i">Categoria</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <span className="user-select__button-group">
            <button
              className="btn btn-del selected-user__button"
              onClick={handleDelete}
              type="button"
            >
              Eliminar
            </button>
            <button
              className="btn btn-submit selected-user__button"
              onClick={handleSave}
              type="button"
            >
              Aceptar
            </button>
          </span>
        </form>
      </div>
    );
  }
};
