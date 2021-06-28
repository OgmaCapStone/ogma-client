import React, { useState } from "react";
import Options from "@components/SelectOptions";
import styles from "@styles/ChooseDifficulty.module.scss";

export default function chooseDifficulty() {
  const [Difficulty, setDifficulty] = useState([]);
  return (
    <div className={styles.ChooseDifficulty}>
      <div className={styles.ChooseDifficulty__text}>
        <h2>Choose difficulty</h2>
        <p>Select the level you would like to start with.</p>
      </div>
      <div className={styles.ChooseDifficulty__CardContainer}>
        <Options
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          options={[
            {
              label: "Junior",
              value: "junior",
            },
            {
              label: "Mid",
              value: "mid",
            },
            {
              label: "Senior",
              value: "senior",
            },
            {
              label: "Legendary",
              value: "legendary",
            },
          ]}
          background="glass"
        />
      </div>
    </div>
  );
}
