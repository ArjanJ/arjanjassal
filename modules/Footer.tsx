/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { mq } from '../utils';

export const Footer = () => {
  return (
    <footer
      css={css`
        align-items: center;
        display: flex;
        min-height: 30vh;
        padding: 30px 30px 30px;
        position: relative;
        text-align: center;

        ${mq[0]} {
          padding: 60px 30px 60px;
        }
      `}
    >
      <div
        css={css`
          flex: 1;
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <p
          css={css`
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 30px;
          `}
        >
          Arjan Jassal {new Date().getFullYear()}
        </p>

        <div css={linkContainerStyles}>
          <a href="" css={linkStyles}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g transform="translate(0, 0)">
                <path
                  d="M23.953,2.527a.515.515,0,0,0-.349-.381,1.8,1.8,0,0,0-.945.067S1.63,9.772.429,10.609c-.258.18-.345.285-.388.408-.208.6.439.858.439.858L5.9,13.641a.59.59,0,0,0,.275-.016c1.232-.779,12.4-7.834,13.049-8.071.1-.03.177,0,.157.075-.258.905-9.909,9.478-9.962,9.53a.2.2,0,0,0-.072.177l-.506,5.292s-.212,1.647,1.435,0c1.168-1.169,2.289-2.137,2.849-2.608,1.864,1.287,3.869,2.71,4.734,3.455a1.506,1.506,0,0,0,1.1.423,1.236,1.236,0,0,0,1.051-.933S23.84,5.542,23.968,3.476c.013-.2.03-.332.032-.471A1.762,1.762,0,0,0,23.953,2.527Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </a>
          <a href="" css={linkStyles}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g transform="translate(0, 0)">
                <path
                  fill="#fff"
                  d="M23,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V1C24,0.4,23.6,0,23,0z M7.1,20.5H3.6V9h3.6 V20.5z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1C7.4,6.5,6.5,7.4,5.3,7.4z M20.5,20.5h-3.6 v-5.6c0-1.3,0-3-1.8-3c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6h0c0.5-0.9,1.6-1.8,3.4-1.8c3.6,0,4.3,2.4,4.3,5.5V20.5z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="" css={linkStyles}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g transform="translate(0, 0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#fff"
                  d="M12,0.3c-6.6,0-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4 C8.8,23.8,9,23.4,9,23.1c0-0.3,0-1,0-2c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.8-1.3-1.8C2.5,17,3.7,17,3.7,17 c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2 C5.5,8.1,5,6.9,5.7,5.3c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4c2.3-1.6,3.3-1.2,3.3-1.2c0.7,1.7,0.2,2.9,0.1,3.2 c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.9,0,3.3c0,0.3,0.2,0.7,0.8,0.6 c4.8-1.6,8.2-6.1,8.2-11.4C24,5.7,18.6,0.3,12,0.3z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="" css={linkStyles}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g transform="translate(0, 0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#fff"
                  d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M22.1,13.6c-0.4-0.1-3.2-1-6.4-0.4c1.3,3.7,1.9,6.7,2,7.3C20,19,21.7,16.5,22.1,13.6z M16,21.5c-0.2-0.9-0.7-4-2.2-7.8 c0,0,0,0-0.1,0c-5.8,2-7.9,6-8,6.4c1.7,1.4,3.9,2.2,6.3,2.2C13.4,22.3,14.8,22,16,21.5z M4.4,18.9c0.2-0.4,3-5.1,8.3-6.8 c0.1,0,0.3-0.1,0.4-0.1c-0.3-0.6-0.5-1.2-0.8-1.7c-5.1,1.5-10.1,1.5-10.5,1.5c0,0.1,0,0.2,0,0.3C1.8,14.6,2.7,17.1,4.4,18.9z M2,9.9 c0.5,0,4.7,0,9.5-1.2c-1.7-3-3.5-5.6-3.8-5.9C4.8,4.1,2.6,6.7,2,9.9z M9.6,2.1c0.3,0.4,2.1,2.9,3.8,6c3.6-1.4,5.2-3.4,5.4-3.7 C17,2.7,14.6,1.8,12,1.8C11.2,1.8,10.4,1.9,9.6,2.1z M19.9,5.5c-0.2,0.3-1.9,2.5-5.7,4c0.2,0.5,0.5,1,0.7,1.5 c0.1,0.2,0.1,0.4,0.2,0.5c3.4-0.4,6.8,0.3,7.1,0.3C22.2,9.5,21.4,7.3,19.9,5.5z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const linkStyles = css`
  color: white;
  font-size: 18px;
  margin-left: 20px;
  text-decoration: none;

  &:first-of-type {
    margin-left: 0;
  }
`;

const linkContainerStyles = css`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;
