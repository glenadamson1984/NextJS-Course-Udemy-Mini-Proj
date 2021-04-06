import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import {NotificationContextProvider} from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        {/* can add a head component here and then it would appear on all pages */}
        {/* A common meta data is to set the width of the app to the device width like the example below */}
        {/* it will merge this head element with the other specic page elements - where conflicts arise it will resolve based on specifity */}
        <Head>
          <meta
            name="viewport"
            content="inital-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
