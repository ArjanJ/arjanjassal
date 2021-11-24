/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { ScrollContext } from '../components/ScrollContext';
import { Hero } from './Hero';

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
      </div>
    </ScrollContext.Provider>
  );
};
