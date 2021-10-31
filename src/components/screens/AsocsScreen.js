import React, { useEffect, useState } from "react";
import { getAsocs } from "../../helpers/getAsocs";
import { Search } from "../others/Search";
import { AsocsList } from "./AsocsScreen/AsocsList";
export const AsocsScreen = () => {
  const [asocs, setAsocs] = useState([]);
  const [search, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleSearchChange = ({ target }) => {
    setSelected(target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    (async () => {
      const { error, message, data } = await getAsocs({
        name: search,
      });
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

        <Search
          className="search_container mt-s "
          onChangeSearch={handleSearchChange}
          Search={search}
          onSearch={handleSearch}
        />
        <AsocsList className="users-screen__users-list mt-b" asocs={asocs} />
      </div>
    );
  }
};
