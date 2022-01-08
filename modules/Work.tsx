/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Ettrics } from '../components/Logos/Ettrics';
import { Farmdrop } from '../components/Logos/Farmdrop';
import { Grow } from '../components/Logos/Grow';
import { Onfleet } from '../components/Logos/Onfleet';
import { PerfectMind } from '../components/Logos/PerfectMind';
import { Taloflow } from '../components/Logos/Taloflow';
import { StickyView } from '../components/StickyView';
import { getRandomInt, mq } from '../utils';

const TILE_1 = [getRandomInt(150, 300), getRandomInt(100, 250)];
const TILE_2 = [getRandomInt(-100, 200), getRandomInt(150, 250)];
const TILE_3 = [getRandomInt(-250, -100), getRandomInt(100, 250)];
const TILE_4 = [getRandomInt(-400, -200), getRandomInt(200, 250)];

const TILE_5 = [getRandomInt(50, 350), getRandomInt(-50, 100)];
const TILE_6 = [getRandomInt(-200, 200), getRandomInt(-200, 200)];
const TILE_7 = [getRandomInt(-300, -100), getRandomInt(-300, 250)];
const TILE_8 = [getRandomInt(-100, -350), getRandomInt(100, 250)];

const TILE_9 = [getRandomInt(200, 350), getRandomInt(-200, -300)];
const TILE_10 = [getRandomInt(200, 350), getRandomInt(-200, -300)];
const TILE_11 = [getRandomInt(-300, -100), getRandomInt(-200, -300)];
const TILE_12 = [getRandomInt(-350, -200), getRandomInt(-200, -300)];

function tileTransitions(proportion: number) {
  return function (x: number, y: number) {
    return css`
      ${mq[1]} {
        ${proportion < -2 &&
        `opacity: 0;
        transform: translate(${proportion * x}px, ${proportion * y}px);`}

        ${proportion < 0 &&
        proportion > -2 &&
        `opacity: 1;
        transform: translate(${proportion * x}px, ${proportion * y}px);`}
      }
    `;
  };
}

function titleTransitions(proportion: number) {
  return css`
    ${mq[1]} {
      ${proportion > 0
        ? `opacity: 1;
      transform: none;`
        : `opacity: 0;
      transform: translateY(20%)`}
    }
  `;
}

export const Work = () => {
  return (
    <StickyView height={1800}>
      {proportion => {
        const transition = tileTransitions(proportion);

        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 0 auto;
              max-width: 1076px;
              min-height: calc(var(--vh, 1vh) * 100);
              padding: 100px 15px;

              ${mq[1]} {
                padding: 15px;
              }
            `}
          >
            <h2
              css={[
                css`
                  font-size: 30px;
                  margin-bottom: 30px;
                  transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

                  ${mq[0]} {
                    font-size: 60px;
                    margin-bottom: 60px;
                  }
                `,
                titleTransitions(proportion),
              ]}
            >
              Places I&apos;ve worked
            </h2>

            <div
              css={css`
                display: grid;
                font-weight: 800;
                grid-auto-rows: 90px;
                grid-gap: 0;
                grid-template-columns: 90px 1fr;
                width: 100%;

                ${mq[1]} {
                  grid-auto-rows: 156px;
                  grid-gap: 15px;
                  grid-template-columns: repeat(12, 1fr);
                }

                > * {
                  transition: all 600ms cubic-bezier(0.33, 1, 0.68, 1);
                  will-change: transform, opacity;

                  ${mq[1]} {
                    border-radius: 27px;
                    transition: all 100ms linear;
                  }

                  svg {
                    max-width: 48px;
                    max-height: 48px;

                    ${mq[1]} {
                      max-height: 70px;
                      max-width: 90px;
                    }
                  }
                }
              `}
            >
              <div
                css={[
                  css`
                    background-color: #ab7af7;
                    ${flexCenter}

                    ${mq[1]} {
                      grid-column: 1 / span 2;
                    }
                  `,
                  transition(TILE_1[0], TILE_1[1]),
                ]}
              >
                <Onfleet />
              </div>
              <div
                css={[
                  css`
                    background-color: #8d4af4;

                    ${mq[1]} {
                      grid-column: 3 / span 6;
                    }
                  `,
                  tilePadding,
                  transition(TILE_2[0], TILE_2[1]),
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    display: flex;
                    font-size: 24px;
                    height: 100%;
                    justify-content: space-between;
                  `}
                >
                  <div>
                    <h3 css={[largeTextStyles, headingStyles]}>Onfleet</h3>
                    <p
                      css={[
                        largeTextStyles,
                        secondaryTextStyles,
                        hideOnMobileStyles,
                      ]}
                    >
                      Sr. Frontend Engineer
                    </p>
                  </div>
                  <p css={[largeTextStyles, secondaryTextStyles]}>2021-</p>
                </div>
              </div>
              <div
                css={[
                  css`
                    background-color: #088972;
                    ${flexCenter}

                    ${mq[1]} {
                      grid-column: 9 / span 2;
                    }
                  `,
                  transition(TILE_3[0], TILE_3[1]),
                ]}
              >
                <Farmdrop />
              </div>
              <div
                css={[
                  css`
                    background-color: #0bb99a;
                    font-size: 18px;
                    padding: 0 15px;

                    ${mq[1]} {
                      grid-column: 11 / span 2;
                      padding: 20px;
                    }
                  `,
                  transition(TILE_4[0], TILE_4[1]),
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    display: flex;
                    height: 100%;
                    justify-content: space-between;

                    ${mq[1]} {
                      align-items: initial;
                      flex-direction: column;
                    }
                  `}
                >
                  <h3 css={mediumTextStyles}>Farmdrop</h3>
                  <p css={[secondaryTextStyles, hideOnMobileStyles]}>
                    Sr. Frontend Engineer
                  </p>
                  <p css={[mediumTextStyles, secondaryTextStyles]}>2019-21</p>
                </div>
              </div>
              <div
                css={[
                  css`
                    ${mq[1]} {
                      background-color: #24d4f6;
                      grid-column: 1 / span 3;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_5[0], TILE_5[1]),
                ]}
              ></div>
              <div
                css={[
                  css`
                    background-color: #246bf6;
                    ${flexCenter}

                    ${mq[1]} {
                      grid-column: 4 / span 2;
                    }
                  `,
                  transition(TILE_6[0], TILE_6[1]),
                ]}
              >
                <PerfectMind />
              </div>
              <div
                css={[
                  css`
                    background-color: #4624f6;

                    ${mq[1]} {
                      grid-column: 6 / span 5;
                    }
                  `,
                  transition(TILE_7[0], TILE_7[1]),
                ]}
              >
                <div
                  css={[
                    css`
                      align-items: center;
                      display: flex;
                      font-size: 24px;
                      height: 100%;
                      justify-content: space-between;
                    `,
                    tilePadding,
                  ]}
                >
                  <div>
                    <h3 css={[largeTextStyles, headingStyles]}>Taloflow</h3>
                    <p css={[secondaryTextStyles, hideOnMobileStyles]}>
                      Sr. Frontend Engineer
                    </p>
                  </div>
                  <p
                    css={[
                      css`
                        margin-left: 30px;
                        white-space: nowrap;
                      `,
                      secondaryTextStyles,
                      largeTextStyles,
                    ]}
                  >
                    2018-19
                  </p>
                </div>
              </div>
              <div
                css={[
                  css`
                    ${mq[1]} {
                      background-color: #f6af24;
                      grid-column: 11 / span 2;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_8[0], TILE_8[1]),
                ]}
              ></div>
              <div
                css={[
                  css`
                    background-color: #1aa1d8;
                    ${flexCenter}

                    ${mq[1]} {
                      grid-column: 1 / span 2;
                    }
                  `,
                  transition(TILE_9[0], TILE_9[1]),
                ]}
              >
                <Grow />
              </div>
              <div
                css={[
                  css`
                    background-color: #3db6e8;

                    ${mq[1]} {
                      grid-column: 3 / span 4;
                    }
                  `,
                  transition(TILE_10[0], TILE_10[1]),
                ]}
              >
                <div
                  css={[
                    css`
                      align-items: center;
                      display: flex;
                      font-size: 24px;
                      height: 100%;
                      justify-content: space-between;
                    `,
                    tilePadding,
                  ]}
                >
                  <div>
                    <h3 css={[largeTextStyles, headingStyles]}>Grow</h3>
                    <p css={[secondaryTextStyles, hideOnMobileStyles]}>
                      Frontend Engineer
                    </p>
                  </div>
                  <p
                    css={[
                      css`
                        margin-left: 30px;
                        white-space: nowrap;
                      `,
                      secondaryTextStyles,
                      largeTextStyles,
                    ]}
                  >
                    2016-18
                  </p>
                </div>
              </div>
              <div
                css={[
                  css`
                    background-color: #f1f1f1;
                    ${flexCenter}

                    ${mq[1]} {
                      grid-column: 7 / span 2;
                    }
                  `,
                  transition(TILE_12[0], TILE_11[1]),
                ]}
              >
                <Ettrics />
              </div>
              <div
                css={[
                  css`
                    background-color: #bcbcbc;

                    ${mq[1]} {
                      grid-column: 9 / span 4;
                    }
                  `,
                  transition(TILE_12[0], TILE_12[1]),
                ]}
              >
                <div
                  css={[
                    css`
                      align-items: center;
                      display: flex;
                      height: 100%;
                      justify-content: space-between;
                    `,
                    tilePadding,
                  ]}
                >
                  <div>
                    <h3 css={[largeTextStyles, headingStyles]}>Ettrics</h3>
                    <p
                      css={[
                        secondaryTextStyles,
                        largeTextStyles,
                        hideOnMobileStyles,
                      ]}
                    >
                      Frontend Developer
                    </p>
                  </div>
                  <p
                    css={[
                      css`
                        margin-left: 30px;
                        white-space: nowrap;
                      `,
                      secondaryTextStyles,
                      largeTextStyles,
                    ]}
                  >
                    2015-16
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </StickyView>
  );
};

const hideOnMobileStyles = css`
  display: none;

  ${mq[1]} {
    display: block;
  }
`;

const headingStyles = css`
  ${mq[1]} {
    margin-bottom: 3px;
  }
`;

const secondaryTextStyles = css`
  line-height: 1.25;
  opacity: 0.75;
`;

const largeTextStyles = css`
  font-size: 20px;

  ${mq[1]} {
    font-size: 24px;
  }
`;

const mediumTextStyles = css`
  font-size: 20px;

  ${mq[1]} {
    font-size: 18px;
  }
`;

const tilePadding = css`
  padding: 0 15px;

  ${mq[1]} {
    padding: 0 30px;
  }
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
