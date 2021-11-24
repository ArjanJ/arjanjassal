/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';

import { COLORS, Particles } from '../components/Particles';
import { StickyView } from '../components/StickyView';
import { AnimationOptions, useAnimate } from '../hooks/useAnimate';

export const Hero = () => {
  function pathAnimation(
    strokeDashoffset: number,
    delay = 0,
  ): AnimationOptions {
    return {
      animationOptions: {
        delay,
        duration: 1200,
        easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
        fill: 'forwards',
      },
      keyframes: [
        {
          strokeDashoffset,
        },
      ],
    };
  }

  const { animate: animatePath, ref: pathRef } = useAnimate<SVGPathElement>({
    animationOptions: {},
    keyframes: [],
  });
  const { animate: animatePath2, ref: pathRef2 } = useAnimate<SVGPathElement>({
    animationOptions: {},
    keyframes: [],
  });

  const { ref: headingRef } = useAnimate<HTMLHeadingElement>({
    animationOptions: {
      delay: 400,
      duration: 1200,
      easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
      fill: 'forwards',
    },
    keyframes: [
      {
        opacity: 1,
        transform: 'none',
      },
    ],
  });

  useEffect(() => {
    if (pathRef.current && pathRef2.current) {
      animatePath(pathAnimation(0, 900));
      animatePath2(pathAnimation(0, 1000));
    }
  }, [animatePath, animatePath2, pathRef, pathRef2]);

  const { ref: particlesRef } = useAnimate<HTMLDivElement>({
    animationOptions: {
      duration: 2000,
      easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
      fill: 'forwards',
    },
    keyframes: [
      {
        opacity: 1,
      },
    ],
  });

  return (
    <StickyView height={1400}>
      {proportion => {
        const op = proportion > 0.2 ? 0 : 1;
        const tr = proportion > 0.2 ? 'scale(0.98)' : 'none';

        const waveO = proportion > 0.2 ? 0 : 1;
        const waveTr = proportion > 0.2 ? 'scaleX(2)' : 'none';

        return (
          <>
            <div
              css={css`
                align-items: center;
                display: flex;
                height: 100vh;
                margin: auto;
                max-width: 870px;
                position: relative;
                z-index: 2;
                will-change: transform;
                transition: all 800ms cubic-bezier(0.32, 0, 0.67, 0);
                opacity: ${op};
                transform: ${tr};
              `}
            >
              <h1 css={headingStyles} ref={headingRef}>
                Hello, my name&apos;s Arjan. I build and design things for the
                web.
              </h1>
            </div>

            <div
              css={css`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background: black;
              `}
            />

            <svg
              css={css`
                top: 49%;
                left: 0;
                opacity: ${waveO};
                transform: ${waveTr};
                pointer-events: none;
                position: absolute;
                transition: all 800ms cubic-bezier(0.32, 0, 0.67, 0);
                width: 100%;
                will-change: transform;
                z-index: 1;
              `}
              viewBox="0 0 1441 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                css={css`
                  stroke-dasharray: ${pathRef?.current?.getTotalLength()};
                  stroke-dashoffset: ${pathRef?.current?.getTotalLength()};
                `}
                ref={pathRef}
                d="M0 1H48C96 1 192 1 288 30.9259C384 60.8519 480 120.704 576 150.63C672 180.556 768 180.556 864 143.148C960 105.741 1056 30.9259 1152 15.963C1248 1 1344 45.8889 1392 68.3333L1440 90.7778"
                stroke="url(#paint0_linear_0_1)"
              />
              <path
                css={css`
                  stroke-dasharray: ${pathRef2?.current?.getTotalLength()};
                  stroke-dashoffset: ${pathRef2?.current?.getTotalLength()};
                `}
                ref={pathRef2}
                d="M0 6H48C96 6 192 6 288 35.9259C384 65.8519 480 125.704 576 155.63C672 185.556 768 185.556 864 148.148C960 110.741 1056 35.9259 1152 20.963C1248 6 1344 50.8889 1392 73.3333L1440 95.7778"
                stroke="url(#paint1_linear_0_1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="1437"
                  y1="8"
                  x2="-1.69795e-07"
                  y2="1.00003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.489583" stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="1437"
                  y1="13"
                  x2="-1.69795e-07"
                  y2="6.00003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.489583" stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>

            <div css={backgroundStyles} ref={particlesRef}>
              <Particles />
            </div>
          </>
        );
      }}
    </StickyView>
  );
};

const headingStyles = css`
  color: white;
  font-size: 12vmin;
  font-weight: bold;
  opacity: 0;
  transform: translateY(3%);
`;

const backgroundStyles = css`
  background: linear-gradient(${COLORS[0]}, ${COLORS[COLORS.length - 1]});
  height: 100vh;
  left: 0;
  mix-blend-mode: multiply;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 1s cubic-bezier(0.36, 0.45, 0.63, 0.53);
  user-select: none;
  z-index: 2;
`;
