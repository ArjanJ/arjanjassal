/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { COLORS, Particles } from '../components/Particles';
import { StickyView } from '../components/StickyView';
import { AnimationOptions, useAnimate } from '../hooks/useAnimate';

function wavePathAnimation(delay = 0): AnimationOptions {
  return {
    animationOptions: {
      delay,
      duration: 1200,
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      fill: 'forwards',
    },
    keyframes: [
      {
        strokeDashoffset: 0,
      },
    ],
  };
}

const headingAnimation: AnimationOptions = {
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
};

export const Hero = () => {
  const { ref: headingRef } = useAnimate<HTMLHeadingElement>(headingAnimation);
  const { ref: pathRef } = useAnimate<SVGPathElement>(wavePathAnimation(900));
  const { ref: pathRef2 } = useAnimate<SVGPathElement>(wavePathAnimation(1000));

  return (
    <StickyView height={1600}>
      {proportion => {
        const op = proportion > 1.75 ? 0 : 1;
        const tr = proportion > 0.65 ? 'scale(0.98)' : 'none';

        const waveO = proportion > 1 ? 0 : 1;
        const waveTr = proportion > 1 ? 'scaleX(2)' : 'none';

        // const bgO = proportion > 0.35 ? 0 : 1;
        // const bgC = proportion > 0.35 ? '#9038ff' : '#000';
        // const hTr = proportion < 0.5 ? `scale(${1 - proportion * 10})` : 'none';
        // proportion < 0.5 ? `translateY(-${proportion * 100}%)` : 'none';

        return (
          <>
            <div
              css={css`
                align-items: center;
                display: flex;
                height: 100vh;
                margin: auto;
                max-width: 870px;
                opacity: ${op};
                position: relative;
                // transform: ${tr};
                transition: all 800ms cubic-bezier(0.32, 0, 0.67, 0);
                will-change: transform;
                z-index: 2;
              `}
            >
              <h1 css={headingStyles} ref={headingRef}>
                Hello, my name&apos;s Arjan. I build and design things for the
                web.
              </h1>
            </div>

            <div
              css={css`
                background: black;
                bottom: 0;
                height: 100%;
                left: 0;
                pointer-events: none;
                position: absolute;
                width: 100%;
                z-index: 1;
                transition: all 800ms cubic-bezier(0.32, 0, 0.67, 0);
              `}
            />

            <svg
              css={css`
                left: 0;
                opacity: ${waveO};
                pointer-events: none;
                position: absolute;
                top: 49%;
                transform: ${waveTr};
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

            {/* <div css={backgroundStyles}>
              <Particles />
            </div> */}
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
