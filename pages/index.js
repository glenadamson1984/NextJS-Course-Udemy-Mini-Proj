import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import NewsletterRegistration from "../components/input/newsletter-registration";

const Home = ({featuredEvents}) => {
  return (
    <div>
    <Head>
      <title>NextJS events</title>
      <meta name="description" content="can add anything we want to the special head and do it on every page if you wanted - i skipped adding it everywhere but it is recommended" />
    </Head>
      <NewsletterRegistration />
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