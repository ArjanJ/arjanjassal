/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Ettrics } from '../components/Logos/Ettrics';
import { Farmdrop } from '../components/Logos/Farmdrop';
import { Grow } from '../components/Logos/Grow';
import { Onfleet } from '../components/Logos/Onfleet';
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
    if (proportion < 0 && proportion > -2) {
      return css`
        transform: translate(${proportion * x}px, ${proportion * y}px);
      `;
    }
  };
}

function titleTransitions(proportion: number) {
  if (proportion > 0) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: translateY(20%);
    `;
  }
}

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Work = () => {
  return (
    <StickyView height={2000}>
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
              min-height: 100vh;
              padding: 30px;
            `}
          >
            <h2
              css={[
                css`
                  font-size: 40px;
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
                grid-auto-rows: 100px;
                grid-gap: 15px;
                grid-template-columns: 1fr;
                width: 100%;

                ${mq[1]} {
                  grid-auto-rows: 156px;
                  grid-template-columns: repeat(12, 1fr);
                }

                > * {
                  border-radius: 17px;
                  transition: transform 100ms linear;
                  will-change: transform;

                  ${mq[1]} {
                    border-radius: 27px;
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

                    svg {
                      height: auto;
                      width: 100px;
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
                    padding: 0 30px;

                    ${mq[1]} {
                      grid-column: 3 / span 6;
                    }
                  `,
                  hideOnMobileStyles,
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
                    <h3
                      css={css`
                        font-size: 24px;
                        margin-bottom: 2px;
                      `}
                    >
                      Onfleet
                    </h3>
                    <p
                      css={css`
                        opacity: 0.75;
                      `}
                    >
                      Sr. Frontend Engineer
                    </p>
                  </div>
                  <p
                    css={css`
                      opacity: 0.75;
                    `}
                  >
                    2021-
                  </p>
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

                    svg {
                      height: 77px;
                      width: auto;
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
                    padding: 20px;

                    ${mq[1]} {
                      grid-column: 11 / span 2;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_4[0], TILE_4[1]),
                ]}
              >
                <div
                  css={css`
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                  `}
                >
                  <h3
                    css={css`
                      font-size: 18px;
                    `}
                  >
                    Farmdrop
                  </h3>
                  <p
                    css={css`
                      line-height: 1.25;
                      opacity: 0.75;
                    `}
                  >
                    Sr. Frontend Engineer
                  </p>
                  <p
                    css={css`
                      opacity: 0.75;
                    `}
                  >
                    2019-21
                  </p>
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

                    svg {
                      height: auto;
                      width: 100px;
                    }
                  `,
                  transition(TILE_6[0], TILE_6[1]),
                ]}
              >
                <Taloflow />
              </div>
              <div
                css={[
                  css`
                    background-color: #4624f6;

                    ${mq[1]} {
                      grid-column: 6 / span 5;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_7[0], TILE_7[1]),
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    display: flex;
                    font-size: 24px;
                    height: 100%;
                    justify-content: space-between;
                    padding: 0 30px;
                  `}
                >
                  <div>
                    <h3
                      css={css`
                        font-size: 24px;
                        margin-bottom: 2px;
                      `}
                    >
                      Onfleet
                    </h3>
                    <p
                      css={css`
                        line-height: 1.25;
                        opacity: 0.75;
                      `}
                    >
                      Sr. Frontend Engineer
                    </p>
                  </div>
                  <p
                    css={css`
                      margin-left: 30px;
                      opacity: 0.75;
                      white-space: nowrap;
                    `}
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

                    svg {
                      height: auto;
                      width: 77px;
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
                    background-color: #1ad8b0;

                    ${mq[1]} {
                      grid-column: 3 / span 4;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_10[0], TILE_10[1]),
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    display: flex;
                    font-size: 24px;
                    height: 100%;
                    justify-content: space-between;
                    padding: 0 30px;
                  `}
                >
                  <div>
                    <h3
                      css={css`
                        font-size: 24px;
                        margin-bottom: 2px;
                      `}
                    >
                      Grow
                    </h3>
                    <p
                      css={css`
                        line-height: 1.25;
                        opacity: 0.75;
                      `}
                    >
                      Frontend Engineer
                    </p>
                  </div>
                  <p
                    css={css`
                      margin-left: 30px;
                      opacity: 0.75;
                      white-space: nowrap;
                    `}
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

                    svg {
                      height: auto;
                      width: 77px;
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
                  hideOnMobileStyles,
                  transition(TILE_12[0], TILE_12[1]),
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    display: flex;
                    font-size: 24px;
                    height: 100%;
                    justify-content: space-between;
                    padding: 0 30px;
                  `}
                >
                  <div>
                    <h3
                      css={css`
                        font-size: 24px;
                        margin-bottom: 2px;
                      `}
                    >
                      Ettrics
                    </h3>
                    <p
                      css={css`
                        line-height: 1.25;
                        opacity: 0.75;
                      `}
                    >
                      Frontend Developer
                    </p>
                  </div>
                  <p
                    css={css`
                      margin-left: 30px;
                      opacity: 0.75;
                      white-space: nowrap;
                    `}
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
