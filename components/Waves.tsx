/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useAnimate } from '../hooks/useAnimate';

export const Waves = () => {
  const waveAnimation = {
    animationOptions: {
      duration: 45 * 1000,
      easing: 'cubic-bezier( 0.36, 0.45, 0.63, 0.53)',
      iterations: Infinity,
    },
    keyframes: [
      {
        transform: 'translateX(-100%)',
      },
    ],
  };

  const waveAnimation2 = {
    animationOptions: {
      duration: 60 * 1000,
      easing: 'cubic-bezier( 0.36, 0.45, 0.63, 0.53)',
      iterations: Infinity,
    },
    keyframes: [
      {
        transform: 'translateX(-100%)',
      },
    ],
  };

  const { ref: waveRef } = useAnimate<HTMLDivElement>(waveAnimation);
  const { ref: waveRef2 } = useAnimate<HTMLDivElement>(waveAnimation);
  const { ref: waveRef3 } = useAnimate<HTMLDivElement>(waveAnimation2);
  const { ref: waveRef4 } = useAnimate<HTMLDivElement>(waveAnimation2);

  return (
    <>
      <div
        css={[
          waveStyles,
          css`
            background: url('/wave.svg') bottom repeat-x;
            left: 0;
          `,
        ]}
        ref={waveRef}
      />
      <div
        css={[
          waveStyles,
          css`
            background: url('/wave.svg') bottom repeat-x;
            left: 100%;
          `,
        ]}
        ref={waveRef2}
      />
      <div
        css={[
          waveStyles,
          css`
            background: url('/wave2.svg') bottom repeat-x;
            left: 0;
          `,
        ]}
        ref={waveRef3}
      />
      <div
        css={[
          waveStyles,
          css`
            background: url('/wave2.svg') bottom repeat-x;
            left: 100%;
          `,
        ]}
        ref={waveRef4}
      />
    </>
  );
};

const waveStyles = css`
  bottom: 0;
  height: 100%;
  mix-blend-mode: overlay;
  opacity: 0.2;
  pointer-events: none;
  position: absolute;
  user-select: none;
  width: 100%;
  z-index: 1;
`;
