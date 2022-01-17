/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useLayoutEffect, useState } from 'react';

import { Particles2 } from '../components/Particles2';

export const Intro = () => {
  const [opacity, setOpacity] = useState(1);
  const [scrolled, setScrolled] = useState<number>(1);

  useLayoutEffect(() => {
    function handleScroll() {
      const { innerHeight, scrollY } = window;
      const opacityVal = Number((1 - scrollY / 600).toFixed(2));

      if (innerHeight > scrollY) {
        setScrolled(1 - scrollY * -1);
      }

      if (opacityVal > -0.1) {
        setOpacity(opacityVal);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrolled);

  return (
    <>
      <section
        css={css`
          background: black;
          min-height: 150vh;
          position: relative;
          z-index: 1;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            height: 100vh;
            margin: 0 auto;
            position: sticky;
            top: 0;
            overflow: hidden;
          `}
        >
          <header
            css={css`
              margin: 0 auto;
              max-width: 1200px;
              padding: 0 30px;
              width: 100%;
            `}
          >
            <h1
              css={css`
                display: inline-block;
                font-size: 24px;
                padding: 60px 0 0;
              `}
            >
              Arjan Jassal
            </h1>
          </header>

          <p
            css={css`
              font-size: 37px;
              font-weight: 800;
              margin: auto;
              max-width: 1200px;
              mix-blend-mode: exclusion;
              opacity: ${opacity};
              text-align: center;
              transform: scale(${opacity});
              will-change: opacity;
              padding: 0 30px;

              grid-row: 2;
              grid-column: 1;

              a {
                position: relative;
                display: inline-block;
                color: inherit;
                text-decoration: none;

                &::before {
                  background-color: red;
                  border-radius: 6px;
                  bottom: 0;
                  content: '';
                  height: 100%;
                  left: 0;
                  mix-blend-mode: difference;
                  position: absolute;
                  transform-origin: center bottom;
                  transform: scaleY(0.5);
                  transition: all 350ms cubic-bezier(0.33, 1, 0.68, 1);
                  width: 100%;
                  z-index: -1;
                }

                &:hover {
                  &::before {
                    background-color: white;
                    transform: none;
                    z-index: 1;
                  }
                }
              }
            `}
          >
            I&apos;m currently a <strong>Senior Frontend Engineer</strong> at{' '}
            <a href="">Onfleet</a>, helping power last mile deliveries. Feel
            free to checkout my personal code on&nbsp;
            <a href="">GitHub</a>, designs on <a href="">Dribbble</a>, or link
            me on <a href="">LinkedIn</a>.
          </p>

          <div
            css={css`
              background: black;
              border-radius: 50%;
              filter: drop-shadow(6px 41px 80px black);
              height: 600px;
              left: 0;
              margin: 0 auto;
              overflow: hidden;
              position: relative;
              right: 0;
              bottom: 200px;
              transition: transform 100ms linear;
              width: 600px;
              will-change: transform;
              z-index: -2;

              grid-row: 2;
              grid-column: 1;

              ${scrolled > 100 &&
              `
              transform: scale(${scrolled / 100});
            `}
            `}
          >
            <Particles2 />
          </div>
        </div>

        <div
          css={css`
            background: url('/synthwave-blur.jpeg') center/cover no-repeat fixed;
            bottom: 0;
            filter: blur(14px) contrast(1.9);
            height: 100%;
            left: 0;
            margin: auto;
            overflow: hidden;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            z-index: -3;
          `}
        />
      </section>

      <section
        css={css`
          height: 100vh;
          background: black;
          position: relative;
          z-index: 1;
        `}
      >
        <h1>Sup</h1>
      </section>
    </>
  );
};
