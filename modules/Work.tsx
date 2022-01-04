/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';

import { Ettrics } from '../components/Logos/Ettrics';
import { Farmdrop } from '../components/Logos/Farmdrop';
import { Grow } from '../components/Logos/Grow';
import { Onfleet } from '../components/Logos/Onfleet';
import { PerfectMind } from '../components/Logos/PerfectMind';
import { Taloflow } from '../components/Logos/Taloflow';
import { StickyView } from '../components/StickyView';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { mq } from '../utils';

const data = [
  {
    color: '#AB7AF7',
    company: 'Onfleet',
    logo: Onfleet,
    role: 'Sr. Frontend Engineer',
    when: '2021-',
  },
  {
    color: '#088972',
    company: 'Farmdrop',
    logo: Farmdrop,
    role: 'Sr. Frontend Engineer',
    when: '2019-21',
  },
  {
    color: '#246BF6',
    company: 'Taloflow',
    logo: Taloflow,
    role: 'Sr. Frontend Engineer',
    when: '2018-19',
  },
  {
    color: '#1AA1D8',
    company: 'Grow',
    logo: Grow,
    role: 'Frontend Engineer',
    when: '2016-18',
  },
  {
    color: '#F1F1F1',
    company: 'Ettrics',
    logo: Ettrics,
    role: 'Frontend Developer',
    when: '2015-16',
  },
  {
    color: '#1D4287',
    company: 'PerfectMind',
    logo: PerfectMind,
    role: 'Web Designer',
    when: '2014-15',
  },
];

export const Work = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const containerRefEntry = useIntersectionObserver(containerRef, {
    threshold: [0.25, 0.5, 0.75],
  });

  function isInView(ratio: number) {
    return !!containerRefEntry?.intersectionRatio
      ? containerRefEntry.intersectionRatio > ratio
      : false;
  }

  return (
    <div
      css={css`
        min-height: calc(var(--vh, 1vh) * 100);
        padding: 150px 0 100px;
        position: relative;

        ${mq[0]} {
          padding: 300px 0 200px;
        }
      `}
    >
      <div
        css={css`
          flex: 1;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 30px;
        `}
        ref={containerRef}
      >
        <h2
          css={css`
            font-size: 36px;
            margin-bottom: 50px;
            opacity: 0;
            transform: translateY(20%);
            transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

            ${mq[0]} {
              font-size: 72px;
              margin-bottom: 80px;
            }

            ${isInView(0.5) &&
            `
              opacity: 1;
              transform: none;
            `}
          `}
        >
          Career log
        </h2>

        <ul
          css={css`
            display: grid;
            grid-gap: 40px;
            list-style-type: none;
            padding: 0;
            width: 100%;

            ${mq[0]} {
              grid-gap: 60px;
            }
          `}
        >
          {data.map((work, i) => {
            return (
              <li
                key={work.company}
                css={[
                  css`
                    align-items: center;
                    display: flex;
                    opacity: 0;
                    transform: scale(0.98) translateY(15%);
                    transition: all 800ms ${i * 100}ms
                      cubic-bezier(0.33, 1, 0.68, 1);
                    will-change: transform;

                    ${isInView(0.75) &&
                    `
                      opacity: 1;
                      transform: none;
                    `}
                  `,
                ]}
              >
                <div
                  css={css`
                    align-items: center;
                    background-color: ${work.color};
                    border-radius: 10px;
                    display: flex;
                    height: 60px;
                    justify-content: center;
                    width: 60px;

                    ${mq[0]} {
                      border-radius: 14px;
                      height: 80px;
                      width: 80px;
                    }

                    svg {
                      max-height: 36px;
                      max-width: 42px;

                      ${mq[0]} {
                        max-height: 50px;
                        max-width: 64px;
                      }
                    }
                  `}
                >
                  <work.logo />
                </div>
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    flex: 1;
                    margin-left: 20px;

                    ${mq[0]} {
                      margin-left: 30px;
                    }
                  `}
                >
                  <h3
                    css={css`
                      font-size: 18px;

                      ${mq[0]} {
                        font-size: 24px;
                      }
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
                        display: none;

                        ${mq[0]} {
                          display: block;
                          font-weight: 800;
                          font-size: 24px;
                          opacity: 0.8;
                        }
                      `}
                    >
                      {work.role}
                    </p>
                    <p
                      css={css`
                        font-size: 18px;
                        font-weight: 800;
                        margin-left: 30px;
                        min-width: 74px;
                        opacity: 0.6;

                        ${mq[0]} {
                          font-size: 24px;
                          min-width: 99px;
                        }
                      `}
                    >
                      {work.when}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        css={[
          css`
            left: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
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
              transform: ${isInView(0.25) ? 'scaleX(0)' : 'none'};
              transform-origin: left center;
              transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);
              width: 100%;
              z-index: 1;
            }
          `,
        ]}
      >
        <svg
          viewBox="0 0 1442 299"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            css={wavePathStyles}
            d="M1 44.25L40.6 58.6667C81.4 73.0833 160.6 101.917 241 94.7083C321.4 87.5 400.6 44.25 481 58.6667C561.4 73.0833 640.6 145.167 721 195.625C801.4 246.083 880.6 274.917 961 246.083C1041.4 217.25 1120.6 130.75 1201 80.2917C1281.4 29.8333 1360.6 15.4167 1401.4 8.20833L1441 1"
            stroke="#FFF"
          />
          <path
            css={wavePathStyles}
            d="M1 54.25L40.6 68.6667C81.4 83.0833 160.6 111.917 241 104.708C321.4 97.5 400.6 54.25 481 68.6667C561.4 83.0833 640.6 155.167 721 205.625C801.4 256.083 880.6 284.917 961 256.083C1041.4 227.25 1120.6 140.75 1201 90.2917C1281.4 39.8333 1360.6 25.4167 1401.4 18.2083L1441 11"
            stroke="#FFF"
            strokeOpacity="0.85"
          />
          <path
            css={wavePathStyles}
            d="M1 64.25L40.6 78.6667C81.4 93.0833 160.6 121.917 241 114.708C321.4 107.5 400.6 64.25 481 78.6667C561.4 93.0833 640.6 165.167 721 215.625C801.4 266.083 880.6 294.917 961 266.083C1041.4 237.25 1120.6 150.75 1201 100.292C1281.4 49.8333 1360.6 35.4167 1401.4 28.2083L1441 21"
            stroke="#FFF"
            strokeOpacity="0.7"
          />
          <path
            css={wavePathStyles}
            d="M1 74.25L40.6 88.6667C81.4 103.083 160.6 131.917 241 124.708C321.4 117.5 400.6 74.25 481 88.6667C561.4 103.083 640.6 175.167 721 225.625C801.4 276.083 880.6 304.917 961 276.083C1041.4 247.25 1120.6 160.75 1201 110.292C1281.4 59.8333 1360.6 45.4167 1401.4 38.2083L1441 31"
            stroke="#FFF"
            strokeOpacity="0.55"
          />
          <path
            css={wavePathStyles}
            d="M1 84.25L40.6 98.6667C81.4 113.083 160.6 141.917 241 134.708C321.4 127.5 400.6 84.25 481 98.6667C561.4 113.083 640.6 185.167 721 235.625C801.4 286.083 880.6 314.917 961 286.083C1041.4 257.25 1120.6 170.75 1201 120.292C1281.4 69.8333 1360.6 55.4167 1401.4 48.2083L1441 41"
            stroke="#FFF"
            strokeOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
};

const wavePathStyles = css`
  stroke-width: 3px;

  ${mq[0]} {
    stroke-width: 1px;
  }
`;
