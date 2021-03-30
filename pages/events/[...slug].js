import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";

const FilteredEventsPage = ({events}) => {
  return <div><EventList items={events} /></div>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const filteredData = params.slug;

  const [year, month] = filteredData;

  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return {
      // props: {
      //   hasError: true
      // },
      notFound: true,
      // redirect: {
      //   destination: './error'
      // }
    }
  }

  const filteredEvents = await getFilteredEvents({year: numYear, month: numMonth});

  if(!filteredEvents || filteredEvents.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      events: filteredEvents
    }
  }
}

export default FilteredEventsPage;
