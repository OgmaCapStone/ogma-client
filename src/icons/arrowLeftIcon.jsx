import React from "react";

export default function arrowLeftIcon({ size, color }) {
  return (
    <svg
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      height={size}
    >
      <title id="title">Arrow Left Icon</title>
      <path d="M3 15L11 7M3 15L11 23M3 15H28" stroke={color || "black"} />
    </svg>
  );
}
