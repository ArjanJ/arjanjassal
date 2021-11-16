export const WaveSvg = (props: Record<string, unknown>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#fff"
      d="m0 288 80-48c80-48 240-144 400-144s320 96 480 96 320-96 400-144l80-48v320H0Z"
    />
  </svg>
);

export const Wave2Svg = (props: Record<string, unknown>) => (
  <svg
    viewBox="0 0 1600 198"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_172_171)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1600 121C1289 121 1190.1 -0.250003 789 -3.03189e-06C389 -3.03189e-06 289 121 0 121V198H1600C1600 198 1600 150 1600 121Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_172_171">
        <rect width="1600" height="198" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
