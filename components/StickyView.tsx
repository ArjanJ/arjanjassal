/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';

import { ScrollContext } from './ScrollContext';

// function throttle(callback, limit) {
//   let waiting = false; // Initially, we're not waiting
//   return function () {
//     // We return a throttled function
//     if (!waiting) {
//       // If we're not waiting
//       callback.apply(this, arguments); // Execute users function
//       waiting = true; // Prevent future invocations
//       setTimeout(function () {
//         // After a period of time
//         waiting = false; // And allow future invocations
//       }, limit);
//     }
//   };
// }
// function throttle(callback) {
//   let active = false; // a simple flag
//   let evt; // to keep track of the last event
//   const handler = function () {
//     // fired only when screen has refreshed
//     active = false; // release our flag
//     callback(evt);
//   };
//   return function handleEvent(e) {
//     // the actual event handler
//     evt = e; // save our event at each call
//     if (!active) {
//       // only if we weren't already doing it
//       active = true; // raise the flag
//       requestAnimationFrame(handler); // wait for next screen refresh
//     }
//   };
// }

interface StickyViewProps {
  children(proportion: number): ReactNode;
  height: number;
}

export const StickyView = ({ children, height }: StickyViewProps) => {
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
        height: ${height}px;
        position: relative;
      `}
      ref={stickyViewRef}
    >
      <div
        css={css`
          height: 100vh;
          position: sticky;
          top: 0;
          width: 100%;
        `}
      >
        {children(proportion)}
      </div>
    </section>
  );
};
