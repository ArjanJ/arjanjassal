/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

import { AnimationOptions, useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

export const COLORS = [
  '#ff71ce',
  '#01cdfe',
  '#05ffa1',
  '#b967ff',
  '#fffb96',
] as const;
// export const COLORS = [
//   '#f72585ff',
//   '#7209b7ff',
//   '#3a0ca3ff',
//   '#4361eeff',
//   '#4cc9f0ff',
// ] as const;
// export const COLORS = [
//   '#B052D9',
//   '#7C05F2',
//   '#6204BF',
//   '#04B2D9',
//   '#05DBF2',
// ] as const;
// export const COLORS = [
//   '#03267C', // MIDNIGHT
//   '#F29E4D', // ORANGE
//   '#AD5ED2', // MAGENTA
//   '#1553D7', // BLUE
//   '#F0319D', // PATRICK
// ] as const;
// export const COLORS = ['#362FBB', '#712275', '#F97698', '#FFB845'] as const;

function moveAnimation(): AnimationOptions {
  const translateX = getRandomInt(-50, 90);
  const translateY = getRandomInt(-50, 160);
  const duration = 10 * 1000;

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

const TOTAL_PARTICLES = 60;

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
  filter: blur(50px);
  height: 100vh;
  width: 100vw;
`;

const particleBaseStyles = css`
  border-radius: 50%;
  left: 0;
  position: absolute;
  top: 0;
  will-change: transform;
`;

const particleDynamicStyles = () => {
  const height = getRandomInt(15, 40);
  const width = getRandomInt(15, 50);

  const initX = getRandomInt(-15, 75);
  const initY = getRandomInt(-15, 160);

  return css({
    backgroundColor: getRandomColor(),
    height: `${height}vh`,
    left: `${initX}vw`,
    top: `${initY}vh`,
    width: `${width}vw`,
    zIndex: Math.max(-height, -width),
  });
};
