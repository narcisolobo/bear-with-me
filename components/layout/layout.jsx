/* react */
import { Fragment } from 'react';

/* next */
import Head from 'next/head';

/* react bootstrap */
import Container from 'react-bootstrap/Container';

/* local */
import BearBar from './bearbar';

function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bear With Me: A Fozzie Blog</title>
      </Head>
      <BearBar />
      {children}
    </Fragment>
  );
}

export default Layout;
