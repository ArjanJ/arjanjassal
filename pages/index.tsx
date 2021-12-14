import type { NextPage } from 'next';
import Head from 'next/head';

import { Scroller } from '../modules/Scroller';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arjan</title>
        <meta
          name="description"
          content="Arjan Jassal is a frontend engineer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Scroller />
    </div>
  );
};

export default Home;
