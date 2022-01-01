/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';

import { StickyView } from '../components/StickyView';
import selfPic from '../public/arjan-jassal.webp';
import { mq } from '../utils';

function picTransitions(proportion: number) {
  if (proportion > -0.2) {
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
  if (proportion > -0.2) {
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
      opacity: 0;
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
              max-width: 1000px;
              min-height: 100vh;
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
                    grid-column: 1 / span 8;
                    grid-row: 1;
                    position: relative;
                    transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

                    ${mq[0]} {
                      grid-column: 1 / span 4;
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
                        width: 66%;
                      }
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
                    font-size: 24px;
                    font-weight: 800;
                    grid-column: 2 / -1;
                    grid-row: 1;
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
                  You can see some of my side projects on <a href="#">GitHub</a>
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
                  transform: scale(2);
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
            >
              <svg
                viewBox="0 0 1442 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  css={wavePathStyles}
                  d="M1 168.91L40.6 140.101C81.4 111.293 160.6 53.6749 241 24.866C321.4 -3.94282 400.6 -3.94282 481 10.4616C561.4 24.866 640.6 53.6749 721 89.6859C801.4 125.697 880.6 168.91 961 147.304C1041.4 125.697 1120.6 39.2705 1201 17.6638C1281.4 -3.94282 1360.6 39.2705 1401.4 60.8771L1441 82.4837"
                  stroke="#FFBE0B"
                />
                <path
                  css={wavePathStyles}
                  d="M1 178.91L40.6 150.101C81.4 121.293 160.6 63.6749 241 34.866C321.4 6.05718 400.6 6.05718 481 20.4616C561.4 34.866 640.6 63.6749 721 99.6859C801.4 135.697 880.6 178.91 961 157.304C1041.4 135.697 1120.6 49.2705 1201 27.6638C1281.4 6.05718 1360.6 49.2705 1401.4 70.8771L1441 92.4837"
                  stroke="#FB5607"
                  strokeOpacity="0.85"
                />
                <path
                  css={wavePathStyles}
                  d="M1 188.91L40.6 160.101C81.4 131.293 160.6 73.6749 241 44.866C321.4 16.0572 400.6 16.0572 481 30.4616C561.4 44.866 640.6 73.6749 721 109.686C801.4 145.697 880.6 188.91 961 167.304C1041.4 145.697 1120.6 59.2705 1201 37.6638C1281.4 16.0572 1360.6 59.2705 1401.4 80.8771L1441 102.484"
                  stroke="#FF006E"
                  strokeOpacity="0.7"
                />
                <path
                  css={wavePathStyles}
                  d="M1 198.91L40.6 170.101C81.4 141.293 160.6 83.6749 241 54.866C321.4 26.0572 400.6 26.0572 481 40.4616C561.4 54.866 640.6 83.6749 721 119.686C801.4 155.697 880.6 198.91 961 177.304C1041.4 155.697 1120.6 69.2705 1201 47.6638C1281.4 26.0572 1360.6 69.2705 1401.4 90.8771L1441 112.484"
                  stroke="#8338EC"
                  strokeOpacity="0.55"
                />
                <path
                  css={wavePathStyles}
                  d="M1 208.91L40.6 180.101C81.4 151.293 160.6 93.6749 241 64.866C321.4 36.0572 400.6 36.0572 481 50.4616C561.4 64.866 640.6 93.6749 721 129.686C801.4 165.697 880.6 208.91 961 187.304C1041.4 165.697 1120.6 79.2705 1201 57.6638C1281.4 36.0572 1360.6 79.2705 1401.4 100.877L1441 122.484"
                  stroke="#3A86FF"
                  strokeOpacity="0.4"
                />
              </svg>
            </div>
          </div>
        );
      }}
    </StickyView>
  );
};

const textStyles = css`
  filter: blur(9px);
  opacity: 0.6;
  transition: all 400ms ease-in-out;

  a {
    text-decoration: none;
  }
`;

const activeTextStyles = css`
  filter: blur(0px);
  opacity: 1;

  a:hover {
    color: #ffbe0b;
  }
`;

const wavePathStyles = css`
  stroke-width: 2px;

  ${mq[0]} {
    stroke-width: 1px;
  }
`;
