import React from "react";

export default function chevronIcon({ color, size }) {
  return (
    <svg
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Chevron Right Icon</title>
      <path
        d="M5 14L12 7.5L5 1"
        stroke={color || "black"}
        strokeLinecap="square"
      />
    </svg>
  );
}
