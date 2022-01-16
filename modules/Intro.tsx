/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { Particles2 } from '../components/Particles2';

export const Intro = () => {
  const [opacity, setOpacity] = useState(100);
  const [s, setS] = useState<number>(1);

  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;
      const opacityVal = Number((1 - scrollY / 600).toFixed(2));

      setS(1 - scrollY * 1);

      if (opacityVal >= 0) {
        setOpacity(opacityVal);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(s, (1 - s) / 100);

  return (
    <>
      <section
        css={css`
          align-items: center;
          background: black;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          position: relative;
          z-index: 1;
          // filter: brightness(${opacity}) hue-rotate(${s}deg);
        `}
      >
        <div
          css={css`
            display: grid;
            margin: 0 auto;
            min-height: 100vh;
            max-width: 1200px;
            padding: 0 30px;
          `}
        >
          <header css={css``}>
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
              mix-blend-mode: exclusion;
              opacity: ${opacity};

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
        </div>

        <div
          css={css`
            background: url('/synthwave-blur.jpeg') center/cover no-repeat;
            bottom: 0;
            filter: blur(15px) contrast(1.9);
            height: 100%;
            left: 0;
            margin: auto;
            overflow: hidden;
            position: fixed;
            right: 0;
            top: 0;
            width: 100%;
            z-index: -3;
          `}
        />

        <div
          css={css`
            height: 100%;
            left: 0;
            overflow: hidden;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: -1;
          `}
        >
          <Particles2 />
        </div>

        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 25%;
            height: 100vw;
            width: 100vw;
            background: black;
            border-radius: 50%;
            margin: auto;
            // opacity: 0.5;
            // border: 1px solid white;
            filter: blur(200px);
            transform: scale(${(1 - s) / 100});
            // transition: transform 100ms linear;
            z-index: -2;
          `}
        />
      </section>

      <section
        css={css`
          height: 100vh;
          background: black;
        `}
      ></section>
    </>
  );
};
