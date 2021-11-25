/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';

import { StickyView } from '../components/StickyView';

const data = [
  {
    company: 'Onfleet',
    role: 'Senior Frontend Engineer',
    when: '2021-',
  },
  {
    company: 'Farmdrop',
    role: 'Senior Frontend Engineer',
    when: '2019-21',
  },
  {
    company: 'Taloflow',
    role: 'Senior Frontend Engineer',
    when: '2018-19',
  },
  {
    company: 'Grow',
    role: 'Frontend Engineer, Team Lead',
    when: '2016-18',
  },
  {
    company: 'Ettrics',
    role: 'Frontend Developer',
    when: '2015-16',
  },
  {
    company: 'PerfectMind',
    role: 'Web Designer',
    when: '2014-15',
  },
];

function workTitleTransitions(proportion: number) {
  if (proportion > -0.8) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: translateY(10%);
    `;
  }
}

function careerListTransitions(proportion: number) {
  if (proportion > -0.1) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: scale(0.98);
    `;
  }
}

function waveTransitions(proportion: number) {
  if (proportion > -0.5) {
    return css`
      stroke-dashoffset: 0;
    `;
  }
}

export const Work = () => {
  const wavePathRef = useRef<SVGPathElement>(null);
  const wavePathRef2 = useRef<SVGPathElement>(null);

  return (
    <StickyView height={1400}>
      {proportion => {
        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              min-height: 100vh;
              // padding-top: 180px;
              // background: linear-gradient(black 50%, #f0319d);
              // background: tomato;
            `}
          >
            <div
              css={css`
                flex: 1;
                max-width: 870px;
                margin: 0 auto;
              `}
            >
              <div
                css={[
                  css`
                    transition: all 800ms cubic-bezier(0.5, 1, 0.89, 1);
                  `,
                  workTitleTransitions(proportion),
                ]}
              >
                <h2
                  css={css`
                    background: -webkit-linear-gradient(#1553d7, #f0319d);
                    font-size: 12vmin;
                    line-height: 1;
                    margin-bottom: 80px;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  `}
                >
                  Work
                </h2>
              </div>
              <ul
                css={[
                  css`
                    list-style-type: none;
                    justify-self: flex-end;
                    padding: 0;
                    transition: all 800ms cubic-bezier(0.5, 1, 0.89, 1);
                    width: 100%;
                  `,
                  careerListTransitions(proportion),
                ]}
              >
                {data.map(work => {
                  return (
                    <li
                      key={work.company}
                      css={css`
                        align-items: center;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 40px;

                        &:last-child {
                          margin-bottom: 0;
                        }
                      `}
                    >
                      <h3
                        css={css`
                          font-size: 24px;
                          font-weight: 400;
                        `}
                      >
                        {work.company}
                      </h3>

                      <div
                        css={css`
                          display: flex;
                        `}
                      >
                        <p
                          css={css`
                            font-size: 24px;
                            margin-left: 20px;
                            opacity: 0.7;
                          `}
                        >
                          {work.role}
                        </p>
                        <p
                          css={css`
                            font-size: 24px;
                            margin-left: 30px;
                            min-width: 90px;
                            opacity: 0.4;
                            text-align: right;
                          `}
                        >
                          {work.when}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <svg
              css={css`
                left: 0;
                pointer-events: none;
                position: absolute;
                top: 40%;
                transition: all 800ms cubic-bezier(0.32, 0, 0.67, 0);
                width: 100%;
                will-change: transform;
              `}
              viewBox="0 0 1442 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                css={[
                  css`
                    stroke-dasharray: ${wavePathRef?.current?.getTotalLength()};
                    stroke-dashoffset: ${wavePathRef?.current?.getTotalLength()};
                    transition: all 1200ms cubic-bezier(0.33, 1, 0.68, 1);
                  `,
                  waveTransitions(proportion),
                ]}
                ref={wavePathRef}
                d="M1 54.1111L61 72.1032C121 90.0952 241 126.079 361 132.077C481 138.074 601 114.085 721 84.0979C841 54.1111 961 18.127 1081 6.13227C1201 -5.86244 1321 6.13227 1381 12.1296L1441 18.127"
                stroke="url(#paint0_linear_0_1A)"
              />
              <path
                css={[
                  css`
                    stroke-dasharray: ${wavePathRef2?.current?.getTotalLength()};
                    stroke-dashoffset: ${wavePathRef2?.current?.getTotalLength()};
                    transition: all 1200ms 100ms cubic-bezier(0.33, 1, 0.68, 1);
                  `,
                  waveTransitions(proportion),
                ]}
                ref={wavePathRef2}
                d="M1 59.1111L61 77.1032C121 95.0952 241 131.079 361 137.077C481 143.074 601 119.085 721 89.0979C841 59.1111 961 23.127 1081 11.1323C1201 -0.862443 1321 11.1323 1381 17.1296L1441 23.127"
                stroke="url(#paint1_linear_0_1B)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1A"
                  x1="0.999997"
                  y1="66.9999"
                  x2="1441"
                  y2="66.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#246BF6" />
                  <stop offset="1" stopColor="#246BF6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1B"
                  x1="0.999997"
                  y1="71.9999"
                  x2="1441"
                  y2="71.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f0319d" />
                  <stop offset="1" stopColor="#f0319d" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      }}
    </StickyView>
  );
};
