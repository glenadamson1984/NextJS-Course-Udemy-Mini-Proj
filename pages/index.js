import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const Home = ({featuredEvents}) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export const getStaticProps = async () => {
const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800
  }
}


export default Home;