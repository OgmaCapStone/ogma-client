import React from "react";
import CardDifficulty from "@components/CardDifficulty";
import ProgressCircleBar from "@components/ProgressCircleBar";
import styles from "@styles/ChooseDifficulty.module.scss";

export default function chooseDifficulty() {
  return (
    <div className={styles.ChooseDifficulty}>
      <div className={styles.ChooseDifficulty__text}>
        <h2>Choose difficulty</h2>
        <p>Select the level you would like to start with.</p>
      </div>
      <div className={styles.ChooseDifficulty__CardContainer}>
        <CardDifficulty difficulty="Junior" />
        <CardDifficulty difficulty="Mid" />
        <CardDifficulty difficulty="Senior" />
        <CardDifficulty difficulty="Legendary" />
      </div>
      <ProgressCircleBar progress={10} />
    </div>
  );
}
