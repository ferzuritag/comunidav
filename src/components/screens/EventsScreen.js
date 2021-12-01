import React, { useEffect, useState } from "react";
import { getEvents } from "../../helpers/getEvents";
import { Search } from "../others/Search";
import { EventList } from "./EventScreen/EventList";

export const EventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      const { error, message, data } = await getEvents({});
      setEvents(data);
    })();
  }, []);
  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    (async () => {
      const { error, message, data } = await getEvents({ search: search });

      if (error === false) {
        setEvents(data);
      } else {
        alert(message);
      }
    })();
  };

  return (
    <div className="events_body">
      <div className="events__content-wrap">
        <Search
          className="search_container mt-s "
          onChangeSearch={handleChangeSearch}
          onSearch={handleSearch}
          Search={search}
        />
        <EventList events={events} />
      </div>
    </div>
  );
};
