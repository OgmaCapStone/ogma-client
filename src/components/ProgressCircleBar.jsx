import React, { useEffect, useState, useRef } from "react";
import styles from "@styles/ProgressCircleBar.module.scss";

const ProgressCircleBar = ({ progress }) => {
  const size = 150;
  const strokeWidth = 12;
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset]);
  return (
    <>
      <svg className={styles.ProgressCircleBar} width={size} height={size}>
        <circle
          className={styles.ProgressCircleBar__CircleBg}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.ProgressCircleBar__Circle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          ref={circleRef}
          strokeDashoffset={offset}
        />
        <text
          className={styles.ProgressCircleBar__Percentage}
          x={center}
          y={center}
        >
          {progress}%
        </text>
        <text className={styles.ProgressCircleBar__Text} x={center} y={center}>
          Done
        </text>
      </svg>
    </>
  );
};

export default ProgressCircleBar;
