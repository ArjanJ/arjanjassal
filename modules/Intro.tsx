/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import throttle from 'lodash.throttle';
import { useLayoutEffect, useRef, useState } from 'react';

import { Particles2 } from '../components/Particles2';
import { mq } from '../utils';

export const Intro = () => {
  const [mounted, setMounted] = useState(false);
  // const [opacity, setOpacity] = useState(1);
  // const [scrolled, setScrolled] = useState<number>(1);
  const blackholeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    setMounted(true);

    let timeout: number;

    function handleScroll() {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = requestAnimationFrame(() => {
        const { innerHeight, scrollY } = window;
        const opacity = (1 - scrollY / 600).toFixed(2);
        const scrolled = 1 - scrollY * -1;

        const newscroll = scrollY / 100;

        console.log(scrollY, scrollY / 100);
        // Blackhole
        if (blackholeRef.current) {
          if (newscroll >= 1 && scrollY <= innerHeight / 2) {
            blackholeRef.current.style.transform = 'scale(' + newscroll + ')';
          } else if (newscroll === 0) {
            blackholeRef.current.style.transform = 'scale(' + 1 + ')';
          }
          // if (scrolled < 10) {
          //   blackholeRef.current.style.transform = 'scale(1)';
          // } else if (innerHeight >= scrollY && scrolled >= 100) {
          //   blackholeRef.current.style.transform =
          //     'scale(' + scrolled / 100 + ')';
          // } else {
          //   blackholeRef.current.style.transform =
          //     'scale(' + innerHeight / 100 + ')';
          // }
          blackholeRef.current.style.transform = 'scale(' + +')';
        }

        // Text
        // if (textRef.current) {
        //   if (Number(opacity) > -0.01) {
        //     textRef.current.style.opacity = opacity;
        //   }
        // }
      });
    }

    window.addEventListener('scroll', throttle(handleScroll, 25));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

          {/* <p
            css={css`
              font-size: 29px;
              font-weight: 800;
              grid-column: 1;
              grid-row: 2;
              margin: auto;
              max-width: 1200px;
              padding: 0 30px;
              transition: transform 100ms linear;
              will-change: opacity, transform;

              ${mq[0]} {
                font-size: 37px;
                text-align: center;
              }

              a {
                position: relative;
                display: inline-block;
                color: inherit;
                text-decoration: none;

                &::before {
                  background-image: linear-gradient(
                    45deg,
                    hsl(334deg 100% 50%) 0%,
                    hsl(331deg 100% 49%) 11%,
                    hsl(327deg 100% 49%) 22%,
                    hsl(322deg 100% 47%) 33%,
                    hsl(317deg 100% 45%) 44%,
                    hsl(311deg 100% 43%) 56%,
                    hsl(303deg 100% 40%) 67%,
                    hsl(293deg 84% 45%) 78%,
                    hsl(280deg 74% 52%) 89%,
                    hsl(265deg 83% 57%) 100%
                  );
                  border-radius: 50%;
                  bottom: 0;
                  content: '';
                  filter: blur(18px) contrast(3);
                  height: 100%;
                  left: 0;
                  opacity: 0.75;
                  position: absolute;
                  transform-origin: center center;
                  transform: scaleY(0.5);
                  transition: all 350ms cubic-bezier(0, 0.55, 0.45, 1);
                  width: 100%;
                  will-change: transform, filter;
                  z-index: -1;
                }

                &:hover {
                  &::before {
                    filter: blur(22px) contrast(3) hue-rotate(25deg);
                    opacity: 1;
                    transform: scale(1.05);
                  }
                }
              }
            `}
            ref={textRef}
          >
            I&apos;m currently a <strong>Senior Frontend Engineer</strong> at{' '}
            <a href="">Onfleet</a>, helping power last mile deliveries. Feel
            free to checkout my personal code on&nbsp;
            <a href="">GitHub</a>, designs on <a href="">Dribbble</a>, or link
            me on <a href="">LinkedIn.</a>
          </p> */}

          <div
            css={css`
              // display: none;
              background: black;
              border-radius: 50%;
              bottom: 90px;
              filter: drop-shadow(6px 26px 80px black);
              grid-column: 1;
              grid-row: 2;
              height: 92vw;
              left: 0;
              margin: 0 auto;
              overflow: hidden;
              position: relative;
              right: 0;
              transition: transform 100ms linear;
              width: 92vw;
              will-change: transform;
              z-index: -2;

              ${mq[0]} {
                bottom: 215px;
                filter: drop-shadow(6px 41px 80px black);
                height: 45vh;
                width: 45vh;
              }
            `}
            ref={blackholeRef}
          >
            {/* {mounted && <Particles2 />} */}
          </div>
        </div>

        <div
          css={css`
            background-attachment: fixed;
            background-color: black;
            background-image: url('/synthwave-mobile.png');
            background-position: center top;
            background-repeat: no-repeat;
            bottom: 0;
            filter: blur(14px) contrast(1.25);
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            z-index: -3;

            ${mq[0]} {
              background-image: url('/synthwave-blur.jpeg');
              background-size: cover;
              filter: blur(14px) contrast(2);
            }
          `}
        />
      </section>

      <section
        css={css`
          height: 100vh;
          background: black;
          box-shadow: 0 -20px 0 black; // Hide blur from image above.
          position: relative;
          z-index: 1;
        `}
      >
        <h1>Sup</h1>
      </section>
    </>
  );
};
