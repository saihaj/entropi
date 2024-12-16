import * as React from 'react';

export const Background = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
    <defs>
      <pattern
        id="a"
        width={60}
        height={104}
        patternTransform="scale(.8)"
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="none"
          stroke="#A8DADC"
          d="m30 0 30 17.3v34.6L30 69.2 0 51.9V17.3L30 0ZM30 69.2l30 17.3v34.6l-30 17.3-30-17.3V86.5l30-17.3Z"
          opacity={0.2}
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#a)" />
    <path
      fill="none"
      stroke="#373F51"
      strokeWidth={1.5}
      d="M-100 300c300-50 500 50 700 0s400-50 700 0"
      opacity={0.1}
    />
    <path
      fill="none"
      stroke="#A8DADC"
      strokeWidth={2}
      d="M-100 350c300-50 500 50 700 0s400-50 700 0"
      opacity={0.15}
    />
  </svg>
);
