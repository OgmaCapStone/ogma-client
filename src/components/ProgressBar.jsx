import React from "react";
import styles from "@styles/ProgressBar.module.scss";

const ProgressBar = ({ completed }) => {
  const filler = {
    width: `${completed}%`,
  };
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressBar__filler} style={filler}>
        {completed}
        {/* <span className={styles.ProgressBar__label}>{`${completed}%`}</span> */}
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
