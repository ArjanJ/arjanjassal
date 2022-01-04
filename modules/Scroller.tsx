/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { COLORS, Particles } from '../components/Particles';
import { ScrollContext } from '../components/ScrollContext';
import { mq } from '../utils';
import { About } from './About';
import { Footer } from './Footer';
import { Hero } from './Hero';
// import { Work } from './Work';
import { Work } from './Work2';

export const Scroller = () => {
  const [scrollingElement, setScrollingElement] =
    useState<HTMLDivElement | null>(null);

  function scrollingElRef(ref: HTMLDivElement) {
    setScrollingElement(ref);
  }

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div
        css={css`
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
        `}
        ref={scrollingElRef}
      >
        <Hero />
        <About />
        <Work />
        <Footer />

        <div
          css={css`
            background: linear-gradient(
              ${COLORS[0]},
              ${COLORS[COLORS.length - 1]}
            );
            height: 2000px;
            left: 0;
            mix-blend-mode: multiply;
            overflow: hidden;
            pointer-events: none;
            position: absolute;
            top: 0;
            user-select: none;
            width: 100%;
            z-index: 1;

            ${mq[0]} {
              height: 2000px;
            }
          `}
        >
          <Particles />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};
