/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useEffect } from 'react';

import { StickyView } from '../components/StickyView';
import { AnimationOptions, useAnimate } from '../hooks/useAnimate';
import { mq } from '../utils';

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

function fadeTransition(proportion: number) {
  if (proportion > 1.1) {
    return css`
      ${mq[1]} {
        opacity: 0;
      }
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

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    console.log(document.cookie.split(';'));
  }, []);

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
                height: calc(var(--vh, 1vh) * 100);
                position: relative;
                width: 100%;
              `}
            >
              <div
                css={[
                  css`
                    margin: 0 auto;
                    max-width: 1076px;
                    padding: 0 30px;
                    transition: all 800ms cubic-bezier(0.33, 1, 0.68, 1);
                  `,
                  fadeTransition(proportion),
                ]}
              >
                <h1
                  css={css`
                    color: white;
                    font-size: 46px;
                    opacity: 0;
                    transform: translateY(3%);

                    ${mq[0]} {
                      font-size: 121px;
                    }
                  `}
                  ref={headingRef}
                >
                  Hello, my name&apos;s Arjan. I build and design things for the
                  web.
                </h1>
              </div>

              <div
                css={css`
                  align-items: center;
                  bottom: 0;
                  display: flex;
                  flex-direction: column;
                  left: 0;
                  opacity: 0;
                  position: absolute;
                  width: 100%;
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
                    height: 55px;
                    overflow: hidden;
                    position: relative;
                    transform-origin: center bottom;
                    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
                    width: 1px;

                    ${mq[1]} {
                      height: 80px;
                    }

                    &::before {
                      animation: ${scrollIndicatorKeyframes} 3s linear infinite;
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
          </>
        );
      }}
    </StickyView>
  );
};
