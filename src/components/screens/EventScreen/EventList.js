import React from "react";
import { EventListItem } from "./EventListItem";

export const EventList = ({events = []}) => {
  return (
    <div className = "event-list">
      <ul>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            id={event.id}
            image={event.image}
            asociation={event.asociation}
            datetime={event.datetime}
            name={event.name}
          />
        ))}
      </ul>
    </div>
  );
};
