import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

import Layout from '@/components/layout/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
