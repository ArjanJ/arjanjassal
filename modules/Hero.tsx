/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

import { StickyView } from '../components/StickyView';
import { AnimationOptions, useAnimate } from '../hooks/useAnimate';

const fadeInAnimation: AnimationOptions = {
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

function headingTransitions(proportion: number) {
  if (proportion > 1) {
    return css`
      opacity: 0;
    `;
  } else {
    return css`
      opacity: 1;
    `;
  }
}

const scrollIndicatorKeyframes = keyframes`
  0% {
    transform: translateY(-100%);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100%);
  }`;

export const Hero = () => {
  const { ref: headingRef } = useAnimate<HTMLHeadingElement>(fadeInAnimation);
  const { ref: scrollIndicatorRef } =
    useAnimate<HTMLDivElement>(fadeInAnimation);

  return (
    <StickyView height={2000}>
      {proportion => {
        return (
          <>
            <div
              css={css`
                align-items: center;
                background: black;
                display: flex;
                height: 100vh;
                position: relative;
                width: 100%;
              `}
            >
              <div
                css={[
                  css`
                    margin: 0 auto;
                    max-width: 1000px;
                    padding: 0 30px;
                    transition: all 800ms cubic-bezier(0.33, 1, 0.68, 1);
                  `,
                  headingTransitions(proportion),
                ]}
              >
                <h1
                  css={css`
                    color: white;
                    font-size: 111px;
                    opacity: 0;
                    transform: translateY(3%);
                  `}
                  ref={headingRef}
                >
                  Hello, my name&apos;s Arjan. I build and design things for the
                  web.
                </h1>
                <div
                  css={css`
                    align-items: center;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    left: 50%;
                    opacity: 0;
                    position: absolute;
                  `}
                  ref={scrollIndicatorRef}
                >
                  <span
                    css={css`
                      font-size: 18px;
                      font-weight: 800;
                      margin-bottom: 10px;
                      text-transform: uppercase;
                    `}
                  >
                    Scroll
                  </span>
                  <span
                    css={css`
                      background: rgba(255, 255, 255, 0.5);
                      height: 70px;
                      overflow: hidden;
                      position: relative;
                      transform-origin: center bottom;
                      transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
                      width: 1px;

                      &::before {
                        animation: ${scrollIndicatorKeyframes} 1.2s linear
                          infinite;
                        background: white;
                        content: '';
                        height: 100%;
                        left: 0;
                        position: absolute;
                        top: 0;
                        width: 1px;
                      }
                    `}
                  />
                </div>
              </div>
            </div>
          </>
        );
      }}
    </StickyView>
  );
};
