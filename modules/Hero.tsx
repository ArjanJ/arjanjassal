/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { StickyView } from '../components/StickyView';
import { AnimationOptions, useAnimate } from '../hooks/useAnimate';

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

export const Hero = () => {
  const { ref: headingRef } = useAnimate<HTMLHeadingElement>(headingAnimation);

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
                z-index: 2;
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
                    will-change: transform;
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
              </div>
            </div>
          </>
        );
      }}
    </StickyView>
  );
};
