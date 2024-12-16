import * as React from 'react';

export const GrowLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1920}
    height={643}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        stroke="#F5F5F5"
        strokeOpacity={0.2}
        d="M1917 .5c-89.5 0-181.11 47.064-246 105-54.33 48.499-92.12 111.127-134 170.5-41.9 59.373-94.54 142.027-165.5 124.126-53.97-13.645-97.79-69.914-153.29-74.71-53-4.591-98.77 34.982-133.64 74.71-34.88 39.727-70.01 84.942-121.456 98.381-70.262 18.338-138.993-29.417-195.737-74.273-56.743-44.883-125.708-92.458-195.866-73.761C451.719 382.403 438.337 570.019 318 600c-41.461 10.361-85.212 2.429-125.871-10.651-40.682-13.08-83.83-26.493-125.474-16.901C35.624 579.603 7.16 604.917 0 634.001"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={2117.49}
        height={834.12}
        x={-100.485}
        y={-100}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_19_107"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_backgroundBlur_19_107"
          result="effect2_dropShadow_19_107"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_19_107"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
