/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Particles } from '../components/Particles';

export const Hero = () => (
  <>
    <section css={heroStyles}>
      <h1 css={headingStyles}>
        Hello, my name&apos;s Arjan. I build and design things for the web.
      </h1>
    </section>
    <div css={fixedBackgroundStyles}>
      <Particles />
    </div>
  </>
);

const heroStyles = css`
  align-items: center;
  display: flex;
  height: 100vh;
  margin: auto;
  padding: 40px;
  position: relative;
`;

const headingStyles = css`
  color: white;
  font-size: 13vmin;
  font-weight: bold;
  margin: 0 auto;
  max-width: 960px;
  mix-blend-mode: difference;
  position: relative;
  z-index: 1;
`;

const fixedBackgroundStyles = css`
  background: linear-gradient(#38033a, black);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;
