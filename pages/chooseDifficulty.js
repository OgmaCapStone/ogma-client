import React, { useState } from "react";
import Options from "@components/SelectOptions";
import Toast from "@components/Toast";
import styles from "@styles/ChooseDifficulty.module.scss";
//
// import checkIcon from "@icons/checkIcon";
// import errorIcon from "../src/assets/images/error.svg";
// import infoIcon from "../src/assets/images/info.svg";
// import warningIcon from "../src/assets/images/warning.svg";

export default function chooseDifficulty() {
  const [Difficulty, setDifficulty] = useState([]);
  const testList = [
    {
      id: 1,
      title: "Success",
      description: "This is a success toast component",
      backgroundColor: "#5cb85c",
    },
    {
      id: 2,
      title: "Danger",
      description: "This is an error toast component",
      backgroundColor: "#d9534f",
    },
    {
      id: 3,
      title: "Info",
      description: "This is an info toast component",
      backgroundColor: "#5bc0de",
    },
    {
      id: 4,
      title: "Warning",
      description: "This is a warning toast component",
      backgroundColor: "#f0ad4e",
    },
  ];
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
      <Toast toastList={testList} position="bottom-right" />
    </div>
  );
}
