/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { shade } from 'polished';
import { useEffect, useRef } from 'react';

import { Container } from '../components/Container';
import { Farmdrop } from '../components/Logos/Farmdrop';
import { GameOn } from '../components/Logos/GameOn';
import { Taloflow } from '../components/Logos/Taloflow';
import { WaveSvg } from '../components/WaveSvg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WORK = [
  {
    color: '#1C32E5',
    company: 'GameOn',
    logo: GameOn,
    role: 'Lead Frontend Engineer',
    when: '2021',
  },
  {
    color: '#088972',
    company: 'Farmdrop',
    logo: Farmdrop,
    role: 'Sr. Frontend Engineer',
    when: '2019-2021',
  },
  {
    color: '#2463F6',
    company: 'Taloflow',
    logo: Taloflow,
    role: 'Sr. Frontend Engineer',
    when: '2018-2019',
  },
  {
    color: '#1AA1D8',
    company: 'Grow',
    role: 'Sr. Frontend Engineer',
    when: '2016-2018',
  },
  {
    color: '#F1F1F1',
    company: 'Ettrics',
    role: 'Frontend Developer',
    when: '2015-2016',
  },
  {
    color: '#094BB0',
    company: 'PerfectMind',
    role: 'Web Designer',
    when: '2014-2015',
  },
];

export const Work = () => {
  const workContainerRef = useRef<HTMLDivElement>(null);
  const workContainerEntry = useIntersectionObserver(workContainerRef, {
    threshold: 0.33,
  });
  const isWorkContainerVisible = workContainerEntry?.isIntersecting;

  const workListRef = useRef<HTMLUListElement>(null);
  const workListEntry = useIntersectionObserver(workListRef, {
    threshold: 0.66,
  });
  const isWorkListVisible = workListEntry?.isIntersecting;

  useEffect(() => {
    const workList = workListRef.current;

    const onWheel = (event: WheelEvent) => {
      const { deltaY } = event;

      if (workList) {
        const { scrollWidth, clientWidth, scrollLeft } = workList;
        const atStart = scrollLeft === 0;
        const atEnd = scrollWidth - clientWidth === scrollLeft;
        const didScrollUp = Math.sign(deltaY) === -1;
        const didScrollDown = Math.sign(deltaY) === 1;

        if ((atStart && didScrollUp) || (atEnd && didScrollDown)) {
          return;
        } else {
          event.preventDefault();
          workList.scrollLeft += event.deltaY;
        }
      }
    };

    workList?.addEventListener('wheel', onWheel);

    return () => {
      workList?.removeEventListener('wheel', onWheel);
    };
  }, [workListRef]);

  return (
    <section
      css={css`
        overflow: hidden;
      `}
      ref={workContainerRef}
    >
      <div
        css={css`
          padding-top: 120px;
          overflow: hidden;
          position: relative;
          z-index: 1;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <Container>
            <h2
              css={[
                subheadingStyles,
                isWorkContainerVisible &&
                  css`
                    opacity: 1;
                    transform: none;
                  `,
              ]}
            >
              Work
            </h2>
          </Container>
        </div>
      </div>

      <div
        css={css`
          position: relative;
        `}
      >
        <WaveSvg
          css={css`
            bottom: 0;
            left: 0;
            mix-blend-mode: overlay;
            position: absolute;
            pointer-events: none;
            transform: ${isWorkListVisible ? 'none' : 'scaleY(0)'};
            transition: all 0.8s 0.4s cubic-bezier(0.33, 1, 0.68, 1);
            transform-origin: center bottom;
            z-index: 2;
          `}
        />

        <ul css={WorkListStyles} ref={workListRef}>
          {WORK.map((entry, index) => {
            return (
              <li
                css={[
                  WorkListItemStyles,
                  `background: linear-gradient(180deg, ${entry.color}, ${shade(
                    0.5,
                    entry.color,
                  )});
                    transition-delay: ${index * 0.09}s;
                    z-index: ${index}`,
                  isWorkListVisible ? 'opacity: 1; transform: none;' : '',
                ]}
                key={entry.company}
              >
                <header
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  <h3
                    css={css`
                      font-size: 18px;
                      font-weight: normal;
                    `}
                  >
                    {entry.company}
                  </h3>
                  <p>{entry.when}</p>
                </header>
                {entry.logo && (
                  <entry.logo
                    css={css`
                      margin: auto;
                      mix-blend-mode: soft-light;
                    `}
                  />
                )}
                <p
                  css={css`
                    color: #8d8d8d;
                    // font-weight: bold;
                    margin-bottom: 45px;
                    text-align: center;
                  `}
                >
                  {entry.role}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        css={css`
          height: 100vh;
        `}
      ></div>
    </section>
  );
};

const subheadingStyles = css`
  display: inline-block;
  background: linear-gradient(#1553d7, #f0319d);
  color: white;
  font-size: 12vmin;
  margin-bottom: 120px;
  opacity: 0;
  transform: translateY(-25vh);
  transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const WorkListStyles = css`
  display: grid;
  gap: 60px;
  grid-auto-flow: column;
  grid-column: center-start/-1;
  list-style-type: none;
  margin-bottom: 180px;
  overflow: auto;
  padding: 0 120px 0 24vw;
  position: relative;
  z-index: 1;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;

const WorkListItemStyles = css`
  background: white;
  border-radius: 16px;
  height: 420px;
  min-width: 288px;
  padding: 18px 16px;
  transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  transform: translateX(100%);
  transform-origin: center bottom;
  opacity: 0;
  will-change: transform, opacity;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
`;
