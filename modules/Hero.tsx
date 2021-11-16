/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

import { Container } from '../components/Container';
import { COLORS, Particles } from '../components/Particles';
import { Waves } from '../components/Waves';
import { useAnimate } from '../hooks/useAnimate';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero = () => {
  const { animate, ref: headingRef } = useAnimate<HTMLHeadingElement>({
    autoPlay: false,
    animationOptions: {},
    keyframes: [],
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const heroEntry = useIntersectionObserver(heroRef, { threshold: 0.66 });
  const isHeroHidden = !heroEntry?.isIntersecting;

  useEffect(() => {
    animate({
      animationOptions: {
        duration: 800,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      },
      keyframes: [
        {
          opacity: isHeroHidden ? 0 : 1,
        },
      ],
    });
  }, [animate, isHeroHidden]);

  return (
    <>
      <section
        css={css`
          align-items: center;
          display: flex;
          height: 100vh;
          position: relative;
        `}
        ref={heroRef}
      >
        <Container>
          <h1 css={headingStyles} ref={headingRef}>
            Hello, my name&apos;s Arjan. I build and design things for the web.
          </h1>
        </Container>
      </section>

      <Waves />

      <div
        css={[
          fixedBackgroundStyles,
          css`
            &::before {
              opacity: ${isHeroHidden ? 1 : 0};
            }
          `,
        ]}
      >
        <div
          css={css`
            opacity: ${isHeroHidden ? 0 : 1};
            transition: opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1);
          `}
        >
          <Particles />
        </div>
      </div>
    </>
  );
};

const headingStyles = css`
  color: white;
  font-size: 12vmin;
  font-weight: bold;
  mix-blend-mode: difference;
  opacity: 0;
  position: relative;
  z-index: 1;
`;

const fixedBackgroundStyles = css`
  background: linear-gradient(${COLORS[0]}, ${COLORS[COLORS.length - 1]});
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    transition: opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1);
    opacity: 0;
    z-index: 1;
  }
`;
