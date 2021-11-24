import { createContext } from 'react';

export const ScrollContext = createContext<{
  scrollingElement: HTMLDivElement | null;
}>({
  scrollingElement: null,
});
