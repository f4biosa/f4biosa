import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

function MyApp({ Component, pageProps }) {
  return (
      <main>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </main>
  );
}

export default MyApp
