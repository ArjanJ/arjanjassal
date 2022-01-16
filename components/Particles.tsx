/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

import { AnimationOptions, useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

// export const COLORS = ['#0038FF', '#00DD81', '#FF00F5', '#FF50D4'] as const;
// export const COLORS = ['#0038FF', '#00DD81'] as const;

// export const COLORS = [
//   '#ffbe0bff',
//   '#fb5607ff',
//   '#ff006eff',
//   '#8338ecff',
//   '#3a86ffff',
// ] as const;
export const COLORS = [
  '#003049ff',
  '#d62828ff',
  '#f77f00ff',
  '#fcbf49ff',
  '#eae2b7ff',
] as const;

function moveAnimation(): AnimationOptions {
  const translateX = getRandomInt(-150, 150);
  const translateY = getRandomInt(-150, 150);

  const duration = 30 * 1000;
  const hue = getRandomInt(0, 60);
  const scale = getRandomInt(50, 150) / 100;

  const keyframes = [
    {
      transform: `translate(${translateX}%, ${translateY}%) scale(${scale})`,
      // transform: `translate3d(-50%, -50%, 0)`,
      // filter: `hue-rotate(${hue}deg)`,
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

const TOTAL_PARTICLES = 15;

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
  return <div css={[particleBaseStyles, particleDynamicStyles]} />;
};

const particleContainerStyles = css`
  filter: blur(120px);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const particleBaseStyles = css`
  border-radius: 50%;
  position: absolute;
  will-change: transform;
`;

const particleDynamicStyles = () => {
  const height = getRandomInt(20, 45);
  const width = getRandomInt(10, 25);

  const initX = getRandomInt(-2000, 2000);
  const initY = getRandomInt(-2000, 2000);

  const opacity = getRandomInt(5, 15) / 100;

  const hue = getRandomInt(0, 60);

  return css({
    background: `radial-gradient(${getRandomColor()}, ${getRandomColor()})`,
    height: `${height}vh`,
    // left: `${initX}%`,
    // top: `${initY}%`,
    width: `${height}vh`,
    opacity,
    // filter: `hue-rotate(${hue}deg)`,
    // filter: `blur(100px) contrast(3) hue-rotate(${hue}deg)`,
    // zIndex: Math.max(-height, -width),
    transform: `translate3d(${initX}px, ${initY}px, 0)`,
  });
};
