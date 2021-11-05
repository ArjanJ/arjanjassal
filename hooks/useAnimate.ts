import { RefObject, useCallback, useEffect, useRef } from 'react';

type Keyframes = Keyframe[];

export interface Animate {
  (options: Options): void;
}

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
  animate: Animate;
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
  const onFinishRef = useRef(onFinish);
  const onCancelRef = useRef(onCancel);

  const getAnimation = useCallback(() => animateRef.current, []);

  const handleCallback = useCallback(
    (callback?: Callback) => (event: Event) => {
      const animation = event.target as Animation;

      if (ref.current && callback) {
        callback({ animation });
      }
    },
    [],
  );

  const animate = useCallback(
    args => {
      if (!ref.current || !keyframesRef.current) return;

      animateRef.current = ref.current.animate(
        args.keyframes,
        args.animationOptions,
      );

      const { current: animateRefCurr } = animateRef;

      if (args.autoPlay === false) animateRefCurr.pause();

      animateRefCurr.oncancel = handleCallback(onCancelRef.current);
      animateRefCurr.onfinish = handleCallback(onFinishRef.current);
    },
    [handleCallback],
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
    animate,
    getAnimation,
    ref,
  };
};
