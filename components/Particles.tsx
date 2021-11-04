/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { memo, useEffect } from 'react';

import { useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

const COLORS = [
  '#03267C', // MIDNIGHT
  '#F29E4D', // ORANGE
  '#AD5ED2', // MAGENTA
  '#1553D7', // BLUE
  '#F53A9D', // PATRICK
] as const;

const TOTAL_PARTICLES = 50;

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
  const translateX = getRandomInt(-25, 125);
  const translateY = getRandomInt(-25, 125);
  const duration = getRandomInt(10 * 1000, 30 * 1000);

  const keyframes = [
    {
      transform: `translate(${translateX}vw, ${translateY}vh)`,
    },
  ];

  const { ref } = useAnimate<HTMLDivElement>({
    animationOptions: {
      direction: 'alternate',
      duration,
      easing: 'linear',
      iterations: 1,
    },
    keyframes,
  });

  return <div css={[particleBaseStyles, particleDynamicStyles]} ref={ref} />;
};

const particleContainerStyles = css`
  filter: blur(60px);
  height: 100vh;
  width: 100vw;
`;

const particleBaseStyles = css`
  border-radius: 50%;
  left: 0;
  position: absolute;
  top: 0;
`;

const particleDynamicStyles = () => {
  const height = getRandomInt(300, 600);
  const width = getRandomInt(600, 1200);

  const initX = getRandomInt(-25, 125);
  const initY = getRandomInt(-25, 125);

  return css({
    backgroundColor: getRandomColor(),
    height: `${height}px`,
    transform: `translate(${initX}vw, ${initY}vh)`,
    width: `${width}px`,
    zIndex: -height,
  });
};
