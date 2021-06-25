import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/ProgressBar.module.scss";

const ProgressBar = ({ completed }) => {
  const filler = {
    // transition: "width 1s ease-in-out",
    width: `${completed}%`,
  };
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressBar__filler} style={filler}>
        {completed}
      </div>
      <div className={styles.ProgressBar__container}>
        <span
          className={styles.ProgressBar__label}
        >{`${completed}% Done`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
