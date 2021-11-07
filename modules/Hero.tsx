/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { Box } from 'rebass';

import { COLORS, Particles } from '../components/Particles';
import { useAnimate } from '../hooks/useAnimate';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useParticleAnimations } from './Particles/ParticleAnimationsContext';

export const Hero = () => {
  const particleAnimations = useParticleAnimations();

  // const { ref: headingRef } = useAnimate<HTMLHeadingElement>({
  //   animationOptions: {
  //     delay: 100,
  //     duration: 1500,
  //     easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  //     fill: 'forwards',
  //   },
  //   keyframes: [
  //     {
  //       opacity: 1,
  //       transform: 'none',
  //     },
  //   ],
  //   onFinish: () => {
  //     console.log('heading on finish');
  //   },
  // });

  const summaryRef = useRef<HTMLParagraphElement>(null);
  const summaryEntry = useIntersectionObserver(summaryRef, { threshold: 0.33 });
  const isSummaryVisible = !!summaryEntry?.isIntersecting;

  useEffect(() => {
    if (isSummaryVisible) {
      particleAnimations?.animations?.forEach(animateParticle => {
        animateParticle(particleAnimations.hideAnimation());
      });
    } else {
      particleAnimations?.animations?.forEach(animateParticle => {
        animateParticle(particleAnimations.showAnimation());
      });
    }
  }, [particleAnimations, isSummaryVisible]);

  return (
    <>
      <Box
        as="section"
        alignItems="center"
        display="flex"
        height="100vh"
        p={4}
        sx={{ position: 'relative' }}
      >
        <div css={containerStyles}>
          <h1 css={headingStyles}>
            Hello, my name&apos;s Arjan. I build and design things for the web.
          </h1>
        </div>
      </Box>

      <Box
        as="section"
        alignItems="center"
        display="flex"
        height="100vh"
        p={4}
        ref={summaryRef}
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div css={containerStyles}>
          <p
            css={[
              textStyles,
              `font-size: 3.5vmin; font-weight: 700; margin-bottom: 60px`,
            ]}
          >
            As a problem solver, I strive to make a positive difference in
            peoples lives through the software I design, build, and ship.
          </p>
          <p css={textStyles}>
            I've worked at small to medium sized startups and agencies, on a
            wide array of projects, including apps for some of Canada’s largest
            financial institutions. As a problem solver, I strive to make a
            positive difference in peoples lives through the software I design,
            build, and ship.
          </p>
        </div>
      </Box>

      <div
        css={[
          fixedBackgroundStyles,
          {
            '&:before': {
              opacity: isSummaryVisible ? 1 : 0,
            },
          },
        ]}
      >
        <Particles />
      </div>
    </>
  );
};

const containerStyles = css`
  margin: 0 auto;
  max-width: 960px;
`;

const headingStyles = css`
  color: white;
  font-size: 12vmin;
  font-weight: bold;
  mix-blend-mode: difference;
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
    transition: opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    opacity: 0;
  }
`;

const textStyles = css`
  color: white;
  font-size: 4vmin;
  line-height: 1.4;
  margin: 0;
`;
