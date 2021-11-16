/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

import { AnimationOptions, useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

// export const COLORS = [
//   '#D92387',
//   '#6F04D9',
//   '#4A088C',
//   '#0460D9',
//   '#04D9C4',
// ] as const;
// export const COLORS = [
//   '#B052D9',
//   '#7C05F2',
//   '#6204BF',
//   '#04B2D9',
//   '#05DBF2,',
// ] as const;
export const COLORS = [
  '#03267C', // MIDNIGHT
  '#F29E4D', // ORANGE
  '#AD5ED2', // MAGENTA
  '#1553D7', // BLUE
  '#F0319D', // PATRICK
] as const;

function moveAnimation(): AnimationOptions {
  const translateX = getRandomInt(-100, 100);
  const translateY = getRandomInt(-100, 100);
  const duration = 20 * 1000;

  const keyframes = [
    {
      transform: `translate(${translateX}vw, ${translateY}vh)`,
    },
  ];

  return {
    animationOptions: {
      composite: 'replace',
      direction: 'alternate',
      duration,
      easing: 'linear',
      fill: 'forwards',
      iterations: Infinity,
    },
    keyframes,
  };
}

const TOTAL_PARTICLES = 40;

function getRandomColor() {
  return getRandomArrayIndex(COLORS);
}

export const Particles = memo(() => (
  <div css={particleContainerStyles}>
    {Array.from(Array(TOTAL_PARTICLES).keys()).map(particle => (
      <Particle key={particle} />
    ))}
  </div>
));

Particles.displayName = 'Particles';

const Particle = () => {
  const { ref } = useAnimate<HTMLDivElement>(moveAnimation());
  return <div css={[particleBaseStyles, particleDynamicStyles]} ref={ref} />;
};

const particleContainerStyles = css`
  filter: blur(65px);
  height: 100vh;
  width: 100vw;
`;

const particleBaseStyles = css`
  border-radius: 50%;
  left: 0;
  position: absolute;
  top: 0;
  mix-blend-mode: darken;
`;

const particleDynamicStyles = () => {
  const height = getRandomInt(20, 40);
  const width = getRandomInt(25, 60);

  const initX = getRandomInt(-50, 90);
  const initY = getRandomInt(-50, 90);

  return css({
    backgroundColor: getRandomColor(),
    height: `${height}vh`,
    left: `${initX}vw`,
    top: `${initY}vh`,
    width: `${width}vw`,
    zIndex: Math.max(-height, -width),
  });
};
