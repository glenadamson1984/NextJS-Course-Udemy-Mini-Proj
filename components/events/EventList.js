import React from "react";
import EventItem from "./EventItem";
import styles from './EventList.module.css';

const EventList = ({ items }) => {

  return (
    <ul className={styles.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            id={event.id}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
