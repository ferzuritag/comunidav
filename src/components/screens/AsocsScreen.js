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
      const { data } = await getAsocs({
        name: search,
      });

      console.log(data);
      setAsocs(data);
    })();
  };

  useEffect(() => {
    (async () => {
      const { data } = await getAsocs({});
      setAsocs(data);
      setIsLoading(false);
    })();
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
