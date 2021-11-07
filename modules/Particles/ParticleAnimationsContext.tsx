import { createContext, useContext, useState } from 'react';

import { Animate, AnimationOptions } from '../../hooks/useAnimate';
import { getRandomInt } from '../../utils';

const DURATION_IN_SEC = 30;

function moveAnimation(): AnimationOptions {
  const translateX = getRandomInt(-100, 100);
  const translateY = getRandomInt(-100, 100);
  const duration = DURATION_IN_SEC * 1000;

  const keyframes = [
    {
      transform: `translate(${translateX}vw, ${translateY}vh)`,
    },
  ];

  return {
    animationOptions: {
      composite: 'replace',
      direction: 'alternate',
      duration,
      easing: 'linear',
      fill: 'forwards',
      iterations: Infinity,
    },
    keyframes,
  };
}

function showAnimation(): AnimationOptions {
  const keyframes = [
    {
      opacity: 1,
    },
  ];

  return {
    animationOptions: {
      duration: 800,
      easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
      fill: 'forwards',
    },
    keyframes,
  };
}

function hideAnimation(): AnimationOptions {
  const keyframes = [
    {
      opacity: 0,
    },
  ];

  return {
    animationOptions: {
      duration: 800,
      easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
      fill: 'forwards',
    },
    keyframes,
  };
}

interface ParticleAnimationsContext {
  animations: Animate[];
  addAnimation(particle: Animate): void;
  hideAnimation(): AnimationOptions;
  moveAnimation(): AnimationOptions;
  showAnimation(): AnimationOptions;
}

const ParticleAnimationsContext = createContext<
  ParticleAnimationsContext | undefined
>(undefined);

export const ParticleAnimationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animations, setAnimations] = useState<Animate[]>([]);

  const addAnimation = (animation: Animate) => {
    setAnimations(animations => [...animations, animation]);
  };

  const value = {
    addAnimation,
    animations,
    moveAnimation,
    hideAnimation,
    showAnimation,
  };

  return (
    <ParticleAnimationsContext.Provider value={value}>
      {children}
    </ParticleAnimationsContext.Provider>
  );
};

export const useParticleAnimations = () => {
  const context = useContext(ParticleAnimationsContext);

  if (context === undefined) {
    throw new Error(
      'useParticleAnimations must be used within a ParticleAnimationsProvider',
    );
  }

  return context;
};
