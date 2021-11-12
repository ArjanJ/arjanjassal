/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { darken } from 'polished';
import { useEffect, useRef } from 'react';

import { Container } from '../components/Container';
import { WaveSvg } from '../components/WaveSvg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WORK = [
  {
    color: '#088972',
    company: 'Farmdrop',
    role: 'Senior Frontend Engineer',
  },
  {
    color: '#2463F6',
    company: 'Taloflow',
    role: 'Senior Frontend Engineer',
  },
  {
    color: '#1AA1D8',
    company: 'Grow',
    role: 'Senior Frontend Engineer, Team Lead',
  },
  {
    color: '#F1F1F1',
    company: 'Ettrics',
    role: 'Frontend Developer',
  },
  {
    color: '#094BB0',
    company: 'PerfectMind',
    role: 'Web Designer',
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
      // event.preventDefault();

      if (workList) {
        workList.scrollLeft += event.deltaY;
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
              Experience
            </h2>
          </Container>
        </div>
      </div>

      <div css={{ position: 'relative' }}>
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
                  `background: linear-gradient(180deg, ${entry.color}, ${darken(
                    0.2,
                    entry.color,
                  )});
                    transition-delay: ${index * 0.09}s;
                    z-index: ${index}`,
                  isWorkListVisible ? 'opacity: 1; transform: none;' : '',
                ]}
                key={entry.company}
              ></li>
            );
          })}
        </ul>
      </div>
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
  padding: 0 24vw;
  position: relative;
  z-index: 1;
`;

const WorkListItemStyles = css`
  background: white;
  border-radius: 12px;
  height: 420px;
  min-width: 288px;
  transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  transform: scaleY(0%);
  transform-origin: center bottom;
  will-change: transform, opacity;
  position: relative;
`;
