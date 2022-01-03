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

const TILE_1 = [getRandomInt(200, 400), getRandomInt(200, 400)];
const TILE_2 = [getRandomInt(-100, 200), getRandomInt(200, 400)];
const TILE_3 = [getRandomInt(-250, -100), getRandomInt(150, 450)];
const TILE_4 = [getRandomInt(-400, -200), getRandomInt(200, 400)];

const TILE_5 = [getRandomInt(50, 500), getRandomInt(-50, 100)];
const TILE_6 = [getRandomInt(-200, 200), getRandomInt(-200, 200)];
const TILE_7 = [getRandomInt(-300, -100), getRandomInt(-300, 300)];
const TILE_8 = [getRandomInt(-100, -500), getRandomInt(100, 300)];

const TILE_9 = [getRandomInt(200, 500), getRandomInt(-200, -500)];
const TILE_10 = [getRandomInt(200, 350), getRandomInt(-200, -500)];
const TILE_11 = [getRandomInt(-300, -100), getRandomInt(-200, -500)];
const TILE_12 = [getRandomInt(-500, -200), getRandomInt(-200, -500)];

function tileTransitions(proportion: number) {
  return function (x: number, y: number) {
    if (proportion < 0 && proportion > -1) {
      return css`
        transform: translate(${proportion * x}px, ${proportion * y}px);
      `;
    }
  };
}

export const Work = () => {
  return (
    <StickyView height={3200}>
      {proportion => {
        const transition = tileTransitions(proportion);

        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              justify-content: center;
              margin: 0 auto;
              max-width: 1076px;
              min-height: 100vh;
              padding: 30px;
            `}
          >
            <div
              css={css`
                display: grid;
                grid-auto-rows: 120px;
                grid-gap: 15px;
                grid-template-columns: 1fr;
                width: 100%;

                ${mq[1]} {
                  grid-auto-rows: 156px;
                  grid-template-columns: repeat(12, 1fr);
                }

                > * {
                  border-radius: 27px;
                  transition: transform 100ms linear;
                  will-change: transform;
                }
              `}
            >
              <div
                css={[
                  css`
                    background-color: #ab7af7;

                    ${mq[1]} {
                      grid-column: 1 / span 2;
                    }
                  `,
                  transition(TILE_1[0], TILE_1[1]),
                ]}
              ></div>
              <div
                css={[
                  css`
                    background-color: #8d4af4;

                    ${mq[1]} {
                      grid-column: 3 / span 6;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_2[0], TILE_2[1]),
                ]}
              ></div>
              <div
                css={[
                  css`
                    background-color: #088972;

                    ${mq[1]} {
                      grid-column: 9 / span 2;
                    }
                  `,
                  transition(TILE_3[0], TILE_3[1]),
                ]}
              ></div>
              <div
                css={[
                  css`
                    background-color: #0bb99a;

                    ${mq[1]} {
                      grid-column: 11 / span 2;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_4[0], TILE_4[1]),
                ]}
              ></div>
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

                    ${mq[1]} {
                      grid-column: 4 / span 2;
                    }
                  `,
                  hideOnMobileStyles,
                  transition(TILE_6[0], TILE_6[1]),
                ]}
              ></div>
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
              ></div>
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

                    ${mq[1]} {
                      grid-column: 1 / span 2;
                    }
                  `,
                  transition(TILE_9[0], TILE_9[1]),
                ]}
              ></div>
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
              ></div>
              <div
                css={[
                  css`
                    background-color: #f1f1f1;

                    ${mq[1]} {
                      grid-column: 7 / span 2;
                    }
                  `,
                  transition(TILE_12[0], TILE_11[1]),
                ]}
              ></div>
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
              ></div>
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
