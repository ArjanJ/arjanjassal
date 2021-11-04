import { RefObject, useCallback, useEffect, useRef } from 'react';

type Keyframes = Keyframe[];

interface Options {
  animationOptions: KeyframeAnimationOptions;
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

  useEffect(() => {
    if (ref.current && keyframesRef.current) {
      animateRef.current = ref.current.animate(
        keyframesRef.current,
        animationOptionsRef.current,
      );

      animateRef.current.oncancel = handleCallback(onCancel);
      animateRef.current.onfinish = handleCallback(onFinish);
    }
  }, [handleCallback, onCancel, onFinish, ref]);

  return {
    getAnimation,
    ref,
  };
};
