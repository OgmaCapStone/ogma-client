import React, { useState, useContext } from "react";
import Link from "next/link";
import { store } from "@context";
import Options from "@components/SelectOptions";
import withAuth from "@auth";
import styles from "@styles/ChooseDifficulty.module.scss";

function chooseDifficulty() {
  const { dispatch } = useContext(store);

  return (
    <div className={styles.ChooseDifficulty}>
      <div className={styles.ChooseDifficulty__text}>
        <h2>Choose difficulty</h2>
        <p>Select the level you would like to start with.</p>
      </div>
      <div className={styles.ChooseDifficulty__CardContainer}>
        <Options
          onChange={(e) => {
            dispatch({ type: "SET_LEVEL", level: e.target.value });
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
      <button type="button" className={styles.ChooseDifficulty__btn}>
        <Link href="/questions">Go to test</Link>
      </button>
    </div>
  );
}

export default withAuth(chooseDifficulty, "root");
