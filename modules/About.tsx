/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';

import { StickyView } from '../components/StickyView';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const entry = useIntersectionObserver(textRef, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <StickyView height={2000}>
      {proportion => {
        return (
          <div
            css={css`
              align-items: center;
              display: flex;
              height: 100vh;
              justify-content: center;
              margin: 0 auto;
              max-width: 930px;
              padding: 0 30px;
            `}
          >
            <p
              css={css`
                color: #ead1ff;
                font-size: 7vmin;
                font-weight: bold;
                opacity: ${isVisible ? 1 : 0};
                transform: ${isVisible ? 'none' : 'transformY(20%)'};
                transition: all 800ms cubic-bezier(0.65, 0, 0.35, 1);

                a {
                  color: inherit;
                  text-decoration: none;
                }
              `}
              ref={textRef}
            >
              <span css={[text, activeText]}>
                I&apos;m currently working on{' '}
                <a href="#">powering last mile deliveries at Onfleet.</a>&nbsp;
              </span>
              <span css={[text, proportion > 0.33 && activeText]}>
                You can see some of my <a href="#">side projects on GitHub</a>
                ,&nbsp;
              </span>
              <span css={[text, proportion > 0.66 && activeText]}>
                and I sometimes share <a href="#">designs on Dribbble</a>.
              </span>
            </p>
          </div>
        );
      }}
    </StickyView>
  );
};

const text = css`
  opacity: 0.3;
  filter: blur(9px);
`;

const activeText = css`
  opacity: 1;
  filter: blur(0px);

  a:hover {
    color: #b967ff;
  }
`;
