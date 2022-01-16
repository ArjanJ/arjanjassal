/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import Head from 'next/head';

import { Intro } from '../modules/Intro';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arjan Jassal - Frontend Engineer</title>
        <meta
          name="description"
          content="Arjan Jassal is a frontend engineer."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Intro />
    </div>
  );
};

export default Home;
