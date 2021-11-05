import { RefObject, useCallback, useEffect, useRef } from 'react';

type Keyframes = Keyframe[];

interface Options {
  animationOptions: KeyframeAnimationOptions;
  autoPlay?: boolean;
  keyframes: Keyframes;
  onCancel?: Callback;
  onFinish?: Callback;
}

interface Callback {
  (event: { animation: Animation | undefined }): void;
}

interface Return<T> {
  getAnimation(): Animation | undefined;
  ref: RefObject<T>;
}

export const useAnimate = <T extends HTMLElement>({
  animationOptions,
  autoPlay,
  keyframes,
  onCancel,
  onFinish,
}: Options): Return<T> => {
  const animateRef = useRef<Animation>();
  const animationOptionsRef =
    useRef<KeyframeAnimationOptions>(animationOptions);

  const ref = useRef<T>(null);
  const keyframesRef = useRef(keyframes);

  const getAnimation = useCallback(() => animateRef.current, []);

  const handleCallback = useCallback((callback?: Callback) => {
    return (event: Event) => {
      const animation = event.target as Animation;

      if (ref.current && callback) {
        callback({ animation });
      }
    };
  }, []);

  const animate = useCallback(
    ({ animationOptions, autoPlay, keyframes }) => {
      if (!ref.current || !keyframes) return;

      animateRef.current = ref.current.animate(keyframes, animationOptions);

      const { current: animate } = animateRef;

      if (autoPlay === false) animate.pause();

      animate.oncancel = handleCallback(onCancel);
      animate.onfinish = handleCallback(onFinish);
    },
    [handleCallback, onCancel, onFinish],
  );

  useEffect(() => {
    if (keyframesRef.current) {
      animate({
        animationOptions: animationOptionsRef.current,
        autoPlay,
        keyframes: keyframesRef.current,
      });
    }
  }, [animate, autoPlay]);

  return {
    getAnimation,
    ref,
  };
};
