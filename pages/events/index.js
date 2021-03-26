import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  const router = useRouter();

  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
      const fullPath = `/events/${year}/${month}`;

      router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
