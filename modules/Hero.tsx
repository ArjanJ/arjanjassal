/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Particles } from '../components/Particles';
import { useAnimate } from '../hooks/useAnimate';

export const Hero = () => {
  const { ref } = useAnimate<HTMLHeadingElement>({
    animationOptions: {
      delay: 100,
      duration: 1500,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards',
    },
    keyframes: [
      {
        opacity: 1,
        transform: 'none',
      },
    ],
  });

  return (
    <>
      <section css={heroStyles}>
        <h1 css={headingStyles} ref={ref}>
          Hello, my name&apos;s Arjan. I build and design things for the web.
        </h1>
      </section>
      <div css={fixedBackgroundStyles}>
        <Particles />
      </div>
    </>
  );
};

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
  font-size: 12vmin;
  font-weight: bold;
  margin: 0 auto;
  max-width: 960px;
  mix-blend-mode: difference;
  opacity: 0;
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
