/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';

import { StickyView } from '../components/StickyView';
import selfPic from '../public/arjan-jassal.webp';
import { mq } from '../utils';

export const About = () => {
  return (
    <StickyView height={3200}>
      {proportion => {
        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              justify-content: center;
              margin: 0 auto;
              max-width: 1076px;
              min-height: calc(var(--vh, 1vh) * 100);
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
                    filter: grayscale(1);
                    grid-column: 1 / span 10;
                    grid-row: 1;
                    opacity: 0.6;
                    position: relative;

                    ${mq[0]} {
                      grid-column: 1 / span 4;
                      opacity: 1;
                    }

                    &::before,
                    &::after {
                      content: '';
                      height: 100%;
                      position: absolute;
                      top: 0;
                      z-index: 1;
                    }

                    &::before {
                      background: linear-gradient(270deg, black, transparent);
                      content: '';
                      height: 100%;
                      position: absolute;
                      right: 0;
                      top: 0;
                      width: 100%;
                      z-index: 1;

                      ${mq[0]} {
                        width: 70%;
                      }
                    }

                    &::after {
                      background: black;
                      left: 0;
                      transition: all 600ms cubic-bezier(0.33, 1, 0.68, 1);
                      transform-origin: center left;
                      width: 100%;
                    }
                  `,
                  picTransitions(proportion),
                ]}
              >
                <Image alt="Arjan Jassal smiling outside." src={selfPic} />
              </div>

              <p
                css={[
                  css`
                    font-size: 25px;
                    font-weight: 800;
                    grid-column: 2 / -1;
                    grid-row: 1;
                    opacity: 0;
                    transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

                    ${mq[0]} {
                      font-size: 40px;
                      grid-column: 4 / -1;
                    }

                    a {
                      color: inherit;
                    }
                  `,
                  textTransitions(proportion),
                ]}
              >
                <span css={[textStyles, activeTextStyles]}>
                  I&apos;m currently powering last mile deliveries at{' '}
                  <a href="#">Onfleet</a>. &nbsp;
                </span>
                <span css={[textStyles, proportion > 0.33 && activeTextStyles]}>
                  You can see some of my code on <a href="#">GitHub</a>
                  ,&nbsp;
                </span>
                <span css={[textStyles, proportion > 0.66 && activeTextStyles]}>
                  and I sometimes share designs on <a href="#">Dribbble</a>.
                </span>
              </p>
            </div>

            <div
              css={[
                css`
                  left: 0;
                  pointer-events: none;
                  position: absolute;
                  top: 40px;
                  transform: scale(2.5);
                  width: 100%;
                  z-index: 1;

                  ${mq[0]} {
                    transform: none;
                  }

                  &::before {
                    background: black;
                    content: '';
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transform-origin: right center;
                    transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);
                    width: 100%;
                    z-index: 1;
                  }
                `,
                waveTransitions(proportion),
              ]}
            ></div>
          </div>
        );
      }}
    </StickyView>
  );
};

const textStyles = css`
  filter: blur(8px);
  opacity: 0.6;
  transition: all 400ms ease-in-out;

  a {
    text-decoration: none;
  }
`;

const activeTextStyles = css`
  filter: blur(0px);
  opacity: 1;

  a {
    // color: #3a86ffff;
    text-decoration: none;
  }

  a:hover {
    // TODO
  }
`;

function picTransitions(proportion: number) {
  if (proportion > -0.15) {
    return css`
      &::after {
        transform: scaleX(0);
      }
    `;
  } else {
    return css`
      &::after {
        transform: none;
      }
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
  if (proportion > 1.25) {
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

function waveTransitions(proportion: number) {
  if (proportion > -0.5) {
    return css`
      &::before {
        transform: scaleX(0);
      }
    `;
  } else {
    return css`
      &::before {
        transform: none;
      }
    `;
  }
}
