/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRef } from 'react';

import { StickyView } from '../components/StickyView';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import selfPic from '../public/arjan-jassal.webp';

function picTransitions(proportion: number) {
  if (proportion > -0.25) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: scale(0.99);
    `;
  }
}

function textTransitions(proportion: number) {
  if (proportion > -0.15) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: translateX(-3%);
    `;
  }
}

function containerTransitions(proportion: number) {
  if (proportion > 1.4) {
    return css`
      opacity: 0;
    `;
  } else {
    return css`
      opacity: 1;
    `;
  }
}

export const About = () => {
  return (
    <StickyView height={2000}>
      {proportion => {
        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              min-height: 100vh;
              justify-content: center;
              margin: 0 auto;
              max-width: 930px;
              padding: 0 30px;
            `}
          >
            <div
              css={[
                css`
                  align-items: center;
                  display: grid;
                  grid-template-columns: repeat(10, 1fr);
                  position: relative;
                  transition: all 600ms cubic-bezier(0.33, 1, 0.68, 1);
                `,
                containerTransitions(proportion),
              ]}
            >
              <div
                css={[
                  css`
                    filter: grayscale(0.5);
                    grid-column: 1 / span 4;
                    grid-row: 1;
                    position: relative;
                    transition: all 600ms cubic-bezier(0.33, 1, 0.68, 1);

                    &::before {
                      content: '';
                      position: absolute;
                      top: 0;
                      right: 0;
                      width: 66%;
                      height: 100%;
                      background: linear-gradient(270deg, black, transparent);
                      z-index: 1;
                    }

                    &:hover {
                      filter: grayscale(0.3);
                    }
                  `,
                  picTransitions(proportion),
                ]}
              >
                <Image alt="Arjan Jassal similing outside." src={selfPic} />
              </div>
              <p
                css={[
                  css`
                    color: white;
                    font-size: 5vmin;
                    font-weight: bold;
                    grid-column: 4 / -1;
                    grid-row: 1;
                    transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

                    a {
                      color: inherit;
                      text-decoration: none;
                    }
                  `,
                  textTransitions(proportion),
                ]}
              >
                <span css={[text, activeText]}>
                  I&apos;m currently working on{' '}
                  <a href="#">powering last mile deliveries at Onfleet.</a>
                  &nbsp;
                </span>
                <span css={[text, proportion > 0.33 && activeText]}>
                  You can see some of my <a href="#">side projects on GitHub</a>
                  ,&nbsp;
                </span>
                <span css={[text, proportion > 0.66 && activeText]}>
                  and I sometimes share <a href="#">designs on Dribbble</a>.
                </span>
              </p>
            </div>
          </div>
        );
      }}
    </StickyView>
  );
};

const text = css`
  opacity: 0.6;
  filter: blur(9px);
  transition: all 400ms ease-in-out;
`;

const activeText = css`
  opacity: 1;
  filter: blur(0px);

  a:hover {
    color: #b967ff;
  }
`;
