import React, { useEffect, useState } from "react";
import { getAsocs } from "../../helpers/getAsocs";
import { Search } from "../others/Search";
import { AsocsList } from "./AsocsScreen/AsocsList";
import { categories } from "./AsocsScreen/categories";
export const AsocsScreen = () => {
  const [asocs, setAsocs] = useState([]);
  const [search, setSearch] = useState({
    search: "",
    category: "i",
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleSearchChange = ({ target }) => {
    setSearch({
      ...search,
      [target.name]: target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    (async () => {
      const { error, message, data } = await getAsocs(search);
      if (!error) {
        setAsocs(data);
      } else {
        alert(message);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      const { error, data } = await getAsocs({});
      if (!error) {
        setAsocs(data);
      }
      setIsLoading(false);
    })();
    return () => {
      setAsocs([]);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>
      </div>
    );
  } else {
    return (
      <div className="users-screen__body">
        <div className="users-screen__menu-container"></div>
        <select className= "select-menu" name= "category" value={search.category} onChange= {handleSearchChange}>
          <option value = "i">Categoria</option>
          {categories.map((item)=>(<option key = {item.id} value={item.id}>{item.name}</option>))}
        </select>
        <Search
          className="search_container mt-s "
          onChangeSearch={handleSearchChange}
          Search={search.search}
          onSearch={handleSearch}
        />
        <AsocsList className="users-screen__users-list mt-b" asocs={asocs} />
      </div>
    );
  }
};
