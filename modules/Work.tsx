/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

import { Container } from '../components/Container';

const WORK = [
  {
    company: 'Farmdrop',
    role: 'Senior Frontend Engineer',
  },
  {
    company: 'Taloflow',
    role: 'Senior Frontend Engineer',
  },
  {
    company: 'Grow',
    role: 'Senior Frontend Engineer, Team Lead',
  },
  {
    company: 'Ettrics',
    role: 'Frontend Developer',
  },
  {
    company: 'PerfectMind',
    role: 'Web Designer',
  },
];

export const Work = () => {
  const workListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const workList = workListRef.current;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

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
    <>
      <section
        css={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <Container>
            <h2 css={subheadingStyles}>Experience</h2>
          </Container>
        </div>
      </section>

      <ul css={WorkListStyles} ref={workListRef}>
        {WORK.map(entry => {
          return (
            <li css={WorkListItemStyles} key={entry.company}>
              <h3>{entry.company}</h3>
              <h4>{entry.role}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const subheadingStyles = css`
  color: white;
  font-size: 12vmin;
  margin-bottom: 100px;
`;

const WorkListStyles = css`
  display: grid;
  gap: 60px;
  grid-auto-flow: column;
  grid-column: center-start/-1;
  list-style-type: none;
  overflow: auto;
  padding: 0;
  padding-left: 24vw;
  position: relative;
  z-index: 1;
`;

const WorkListItemStyles = css`
  background: white;
  border-radius: 8px;
  height: 420px;
  min-width: 320px;
`;
