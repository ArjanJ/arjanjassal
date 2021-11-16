import type { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from '../modules/Hero';
import { Work } from '../modules/Work';

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
      {/* <Work /> */}
    </div>
  );
};

export default Home;
