/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';

import { mq } from '../utils';
import { ScrollContext } from './ScrollContext';

interface StickyViewProps {
  children(proportion: number): ReactNode;
  height: number;
  bottom?: number;
}

export const StickyView = ({ bottom, children, height }: StickyViewProps) => {
  const { scrollingElement } = useContext(ScrollContext);
  const [proportion, setProportion] = useState<number>(0);
  const stickyViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: number;

    function onScroll(event: Event) {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = requestAnimationFrame(() => {
        const { target } = event;
        const container: HTMLDivElement = target as HTMLDivElement;
        const stickyParent = stickyViewRef.current;

        if (!container || !stickyParent) {
          return;
        }

        const containerRect = container.getBoundingClientRect();
        const stickyParentRect = stickyParent.getBoundingClientRect();
        const offTop = containerRect.y - stickyParentRect.y;

        if (containerRect.height < stickyParentRect.height) {
          const viewHeight = stickyParentRect.height - containerRect.height;
          setProportion(offTop / viewHeight);
        } else {
          const viewHeight = containerRect.height;
          const result =
            offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
          setProportion(result);
        }
      });
    }

    if (scrollingElement) {
      scrollingElement.addEventListener('scroll', onScroll, false);
    }

    return () => {
      if (scrollingElement) {
        scrollingElement.removeEventListener('scroll', onScroll, false);
      }
    };
  }, [scrollingElement]);

  return (
    <section
      css={css`
        ${mq[1]} {
          height: ${height}px;
          margin-bottom: ${bottom || 0}px;
          position: relative;
        }
      `}
      ref={stickyViewRef}
    >
      <div
        css={css`
          ${mq[1]} {
            height: 100vh;
            position: sticky;
            top: 0;
            width: 100%;
          }
        `}
      >
        {children(proportion)}
      </div>
    </section>
  );
};
