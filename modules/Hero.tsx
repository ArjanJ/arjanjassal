/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';
import { Box } from 'rebass';

import { Particles } from '../components/Particles';
import { useAnimate } from '../hooks/useAnimate';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero = () => {
  const { ref: headingRef } = useAnimate<HTMLHeadingElement>({
    animationOptions: {
      delay: 100,
      duration: 1500,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards',
    },
    keyframes: [
      {
        opacity: 1,
        transform: 'none',
      },
    ],
    onFinish: () => {
      console.log('heading on finish');
    },
  });

  const summaryRef = useRef<HTMLParagraphElement>(null);
  const summaryEntry = useIntersectionObserver(summaryRef, {});
  const summaryIsVisible = !!summaryEntry?.isIntersecting;

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
          <h1 css={headingStyles} ref={headingRef}>
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
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div css={containerStyles}>
          <p css={[textStyles, `margin-bottom: 40px`]}>
            I&apos;m a Frontend Engineer with 7 years of experience designing
            and building simple interfaces.
          </p>
          <p css={textStyles}>
            I&apos;m currently open to new work opportunities. You can view my
            LinkedIn profile or see my side projects on GitHub. I occasionally
            share designs on Dribbble.
          </p>
        </div>
      </Box>

      <div css={fixedBackgroundStyles}>
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
  opacity: 0;
  position: relative;
  z-index: 1;
`;

const fixedBackgroundStyles = css`
  background: linear-gradient(#330235, #0340b1);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const textStyles = css`
  color: white;
  font-size: 6.5vmin;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
`;
