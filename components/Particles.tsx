/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

import { AnimationOptions, useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

export const COLORS = [
  '#ffbe0bff',
  '#fb5607ff',
  '#ff006eff',
  '#8338ecff',
  '#3a86ffff',
] as const;

function moveAnimation(): AnimationOptions {
  const translateX = getRandomInt(-50, 90);
  const translateY = getRandomInt(-50, 160);
  const duration = 7 * 1000;

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

const TOTAL_PARTICLES = 100;

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
  const height = getRandomInt(10, 40);
  const width = getRandomInt(10, 50);

  const initX = getRandomInt(-15, 75);
  const initY = getRandomInt(-15, 175);

  return css({
    backgroundColor: getRandomColor(),
    height: `${height}vh`,
    left: `${initX}vw`,
    top: `${initY}vh`,
    width: `${width}vw`,
    zIndex: Math.max(-height, -width),
  });
};
