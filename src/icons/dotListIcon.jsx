import React from "react";

export default function dotListIcon({ size, colors }) {
  return (
    <svg
      height={size}
      viewBox="0 0 92 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Dot List Icon</title>
      <circle cx={83} cy={9} r={9} fill="url(#paint0_linear)" />
      <line
        x1="0.342529"
        y1="8.5"
        x2="45.7129"
        y2="8.5"
        stroke="url(#paint1_linear)"
        strokeWidth={3}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={83}
          y1={0}
          x2={83}
          y2="24.1875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0] || "black"} />
          <stop offset={1} stopColor={colors[1] || "black"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="-0.2246"
          y1="10.5"
          x2="54.2182"
          y2="9.85673"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0] || "black"} />
          <stop offset={1} stopColor={colors[1] || "black"} />
        </linearGradient>
      </defs>
    </svg>
  );
}
