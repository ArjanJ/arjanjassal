export const Grow = (props: Record<string, unknown>) => (
  <svg
    width="61"
    height="57"
    viewBox="0 0 61 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="28.5" cy="28.5" r="28.5" fill="white" />
    <circle cx="46.5" cy="42.5" r="14.5" fill="white" />
    <mask
      id="mask0_246_35"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="57"
      height="57"
    >
      <circle cx="28.5" cy="28.5" r="28.5" fill="#145670" />
    </mask>
    <g mask="url(#mask0_246_35)">
      <circle cx="46.5" cy="42.5" r="14.5" fill="#09384B" />
    </g>
  </svg>
);
