/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo, useEffect, useRef } from 'react';

import { useAnimate } from '../hooks/useAnimate';
import { useParticleAnimations } from '../modules/Particles/ParticleAnimationsContext';
import { getRandomArrayIndex, getRandomInt } from '../utils';

// export const COLORS = [
//   '#3772ffff',
//   '#f038ffff',
//   '#ef709dff',
//   '#e2ef70ff',
//   '#70e4efff',
// ] as const;
// export const COLORS = [
//   '#f72585', // MIDNIGHT
//   '#7209b7', // ORANGE
//   '#3a0ca3', // MAGENTA
//   '#4361ee', // BLUE
//   '#4cc9f0', // PATRICK
// ] as const;
export const COLORS = [
  '#03267C', // MIDNIGHT
  '#F29E4D', // ORANGE
  '#AD5ED2', // MAGENTA
  '#1553D7', // BLUE
  '#F0319D', // PATRICK
] as const;

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
  const { addAnimation, moveAnimation } = useParticleAnimations();
  const addParticleAnimationRef = useRef(addAnimation);

  const { animate, ref } = useAnimate<HTMLDivElement>(moveAnimation());

  useEffect(() => {
    addParticleAnimationRef.current(animate);
  }, [animate]);

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
