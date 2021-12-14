/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Ettrics } from '../components/Logos/Ettrics';
import { Farmdrop } from '../components/Logos/Farmdrop';
import { Grow } from '../components/Logos/Grow';
import { Onfleet } from '../components/Logos/Onfleet';
import { PerfectMind } from '../components/Logos/PerfectMind';
import { Taloflow } from '../components/Logos/Taloflow';
import { StickyView } from '../components/StickyView';

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

function workTitleTransitions(proportion: number) {
  if (proportion > -0.2) {
    return css`
      opacity: 1;
      transform: none;
    `;
  } else {
    return css`
      opacity: 0;
      transform: translateY(-25%);
    `;
  }
}

function workPlacesTransitions(proportion: number) {
  if (proportion > -0.1) {
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

export const Work = () => {
  return (
    <StickyView height={1000}>
      {proportion => {
        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              min-height: 100vh;
            `}
          >
            <div
              css={css`
                flex: 1;
                max-width: 930px;
                margin: 0 auto;
                padding: 0 30px;
              `}
            >
              <div
                css={[
                  css`
                    transition: all 600ms cubic-bezier(0.5, 1, 0.89, 1);
                  `,
                  workTitleTransitions(proportion),
                ]}
              >
                <h2
                  css={css`
                    background: -webkit-linear-gradient(#01cdfe, #05ffa1);
                    font-size: 8vmin;
                    line-height: 1;
                    margin-bottom: 100px;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  `}
                >
                  Places I&apos;ve worked
                </h2>
              </div>
              <ul
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-gap: 60px;
                  list-style-type: none;
                  padding: 0;
                  width: 100%;
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
                          transition: all 600ms ${i * 80}ms
                            cubic-bezier(0.5, 1, 0.89, 1);
                        `,
                        workPlacesTransitions(proportion),
                      ]}
                    >
                      <div
                        css={css`
                          background: ${work.color};
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 90px;
                          width: 90px;
                          border-radius: 15px;

                          svg {
                            max-width: 67px;
                            max-height: 53px;
                          }
                        `}
                      >
                        <work.logo />
                      </div>
                      <div
                        css={css`
                          flex: 1;
                          margin-left: 20px;
                        `}
                      >
                        <h3
                          css={css`
                            font-size: 20px;
                          `}
                        >
                          {work.company}
                        </h3>
                        <p
                          css={css`
                            font-size: 18px;
                            opacity: 0.8;
                          `}
                        >
                          {work.role}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }}
    </StickyView>
  );
};
