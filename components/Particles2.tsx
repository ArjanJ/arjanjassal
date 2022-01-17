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
export const COLORS = ['#FFFF00', '#000639', '#C40068', '#D5002C'] as const;

const duration = 10 * 1000;

function moveAnimation(i: number): AnimationOptions {
  const translateX = getRandomInt(-25, 125);
  const translateY = getRandomInt(-25, 125);
  const hue = getRandomInt(0, 360);
  const scale = getRandomInt(50, 500) / 100;
  const z = getRandomInt(-1000, 1000);

  const keyframes = [
    {
      transform: `translate3d(0, 0, -2000px)`,
      opacity: 0,
    },
  ];

  return {
    animationOptions: {
      composite: 'replace',
      duration,
      delay: -i * getRandomInt(500, 900),
      easing: 'linear',
      fill: 'forwards',
      iterations: Infinity,
    },
    keyframes,
  };
}

const TOTAL_PARTICLES = 200;

function getRandomColor() {
  return getRandomArrayIndex(COLORS);
}

export const Particles2 = () => {
  return (
    <div css={particleContainerStyles}>
      <div
        css={css`
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          perspective: 250px;
          width: 100%;
        `}
      >
        {Array.from(Array(TOTAL_PARTICLES).keys()).map((particle, i) => (
          <Particle key={particle} i={i} />
        ))}
      </div>
    </div>
  );
};

Particles2.displayName = 'Particles2';

const Particle = memo(({ i }: { i: number }) => {
  const { ref } = useAnimate<HTMLDivElement>(moveAnimation(i));
  return <div css={[particleBaseStyles, particleDynamicStyles]} ref={ref} />;
});

Particle.displayName = 'Particle';

const particleContainerStyles = css`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
`;

const particleBaseStyles = css`
  background: white;
  border-radius: 50%;
  will-change: transform;
`;

const particleDynamicStyles = () => {
  const size = getRandomInt(1, 4);

  const initX = getRandomInt(-1000, 1000);
  const initY = getRandomInt(-1000, 1000);
  const initZ = getRandomInt(-1000, 1000);

  const opacity = getRandomInt(75, 100) / 100;

  return css({
    // backgroundColor: getRandomColor(),
    height: `${size}px`,
    width: `${size}px`,
    opacity,
    transform: `translate3d(${initX}px, ${initY}px, ${initZ}px)`,
  });
};
