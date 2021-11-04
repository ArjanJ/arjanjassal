/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { memo } from 'react';

import { getRandomArrayIndex, getRandomInt } from '../utils';

const COLORS = [
  '#03267C', // MIDNIGHT
  '#F29E4D', // ORANGE
  '#AD5ED2', // MAGENTA
  '#1553D7', // BLUE
  '#38033A', // FUSCHIA
] as const;

const TOTAL_PARTICLES = 25;

function getRandomColor() {
  return getRandomArrayIndex(COLORS);
}


export const Particles = memo(() => (
  <div css={particleContainerStyles}>
    {Array.from(Array(TOTAL_PARTICLES).keys()).map((particle) => (
      <div css={particleStyles} key={particle} />
    ))}
  </div>
));

Particles.displayName = 'Particles';

const particleContainerStyles = css`
  filter: blur(100px);
  height: 100vh;
  width: 100vw;
`;

const particleStyles = () => {
  const height = getRandomInt(20, 35);
  const width = getRandomInt(20, 35);

  const initX = getRandomInt(-5, 70);
  const initY = getRandomInt(-5, 70);

  const futureX = getRandomInt(-50, 100);
  const futureY = getRandomInt(-50, 100);

  const duration = getRandomInt(10, 30);

  return css({
    animation: `${moveAnimation(futureX, futureY)} ${duration}s linear infinite
        alternate`,
    backgroundColor: getRandomColor(),
    borderRadius: '50%',
    height: `${height}vh`,
    left: 0,
    position: 'absolute',
    top: 0,
    transform: `translate(${initX}vw, ${initY}vh)`,
    width: `${width}vw`,
    zIndex: -height,
  })
};

const moveAnimation = (x: number, y: number) => keyframes`
  100% {
    transform: translate(${x}vw, ${y}vh);
  }
`;