import React from "react";

export default function hamburgerIcon({ size, color }) {
  return (
    <svg
      height={size}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Hamburger Icon</title>
      <path
        d="M0 6.1001H24M0 18.9001H24M0 12.5001H24"
        stroke={color || "black"}
        strokeWidth={2}
      />
    </svg>
  );
}
