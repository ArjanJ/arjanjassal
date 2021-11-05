/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

import { useAnimate } from '../hooks/useAnimate';
import { getRandomArrayIndex, getRandomInt } from '../utils';

const COLORS = [
  '#03267C', // MIDNIGHT
  '#F29E4D', // ORANGE
  '#AD5ED2', // MAGENTA
  '#1553D7', // BLUE
  '#F0319D', // PATRICK
] as const;

const DURATION_IN_S = 20;
const TOTAL_PARTICLES = 30;

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
  const translateX = getRandomInt(-100, 100);
  const translateY = getRandomInt(-100, 100);
  const duration = DURATION_IN_S * 1000;

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
      iterations: Infinity,
    },
    keyframes,
  });

  return <div css={[particleBaseStyles, particleDynamicStyles]} ref={ref} />;
};

const particleContainerStyles = css`
  filter: blur(70px);
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
  const height = getRandomInt(200, 500);
  const width = getRandomInt(20, 65);

  const initX = getRandomInt(-20, 120);
  const initY = getRandomInt(-20, 120);

  return css({
    backgroundColor: getRandomColor(),
    height: `${height}px`,
    left: `${initX}vw`,
    top: `${initY}vh`,
    width: `${width}vw`,
    zIndex: -height,
  });
};
