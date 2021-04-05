import React from "react";
import { getAllEvents, getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Comments from "../../components/input/comments";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return <p>Loading the event......</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const event = await getEventById(id);

  return {
    props: {
      event,
    },
    revalidate: 30
  };
};

export const getStaticPaths = async () => {
  // this is ok but we are then generating pages for all events. Ok if only a small number
  // but in reality the number of entries in a db could be enormous
  // so lets pre-render only the popular ones and then change fallback from false to true
  // to indicate some pages need generated when requested rather than all pre-built during build
  // process
  // const allEvents = await getAllEvents();
  // const paths = allEvents.map((singleEvent) => ({
  //   params: {
  //     id: singleEvent.id,
  //   },
  // }));

  const featuredEvents = await getFeaturedEvents();
    const paths = featuredEvents.map((singleEvent) => ({
    params: {
      id: singleEvent.id,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
