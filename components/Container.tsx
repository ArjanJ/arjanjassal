/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef, ReactNode } from 'react';

type ContainerProps = { children: ReactNode } & Record<string, unknown>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => (
    <div
      {...props}
      css={css`
        margin: 0 24vw;
        // max-width: 960px;
        width: 100%;
      `}
      ref={ref}
    >
      {children}
    </div>
  ),
);

Container.displayName = 'Container';
