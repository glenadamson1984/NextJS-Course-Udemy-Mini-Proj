import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filteredData;

  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <p>invalid filter</p>;
  }

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth});

  if(!filteredEvents || filteredEvents.length === 0) {
      return <p>No events for the chosen filter</p>
  }

  return <div><EventList items={filteredEvents} /></div>;
};

export default FilteredEventsPage;
