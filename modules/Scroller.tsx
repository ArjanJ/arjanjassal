/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { COLORS, Particles } from '../components/Particles';
import { ScrollContext } from '../components/ScrollContext';
import { About } from './About';
import { Hero } from './Hero';
import { Work } from './Work';

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
          `}
        >
          <Particles />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};
