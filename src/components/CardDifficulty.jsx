import React from "react";
import styles from "@styles/CardDifficulty.module.scss";

const CardDifficulty = ({ difficulty }) => (
  <div className={styles.cardDifficulty}>
    <p className={`${styles.cardDifficulty__line} ${difficulty}`}> </p>
    <span className={`${styles.cardDifficulty__circle} ${difficulty}`}> </span>
    <p className={styles.cardDifficulty__text}>{difficulty}</p>
  </div>
);

export default CardDifficulty;
