import Head from "next/head";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
