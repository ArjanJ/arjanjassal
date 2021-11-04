/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Particles } from '../components/Particles';

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

      <div>
        <section css={heroStyles}>
          <h1 css={headingStyles}>
            Hello, my name&apos;s Arjan. I build and design things for the web.
          </h1>
        </section>
        <div css={fixedBackgroundStyles}>
          <Particles />
        </div>
      </div>
    </div>
  );
};

const heroStyles = css`
  align-items: center;
  display: flex;
  height: 100vh;
  margin: auto;
  padding: 30px;
  position: relative;
`;

const headingStyles = css`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin: 0 auto;
  max-width: 696px;
  mix-blend-mode: difference;
  opacity: 1;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 80px;
  }
`;

const fixedBackgroundStyles = css`
  background: linear-gradient(#e61f9c, #1c0f4e);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export default Home;
