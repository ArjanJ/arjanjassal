import type { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from '../modules/Hero';

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

      <Hero />
    </div>
  );
};

export default Home;
