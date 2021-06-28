import React from "react";
import Layout from "@components/Layout";
import ProgressBar from "@components/ProgressBar";
import Options from "@components/SelectOptions";
import styles from "@styles/questions.module.scss";

export default function questions() {
  return (
    <Layout>
      <header className={styles.questions__header}>
        <ProgressBar completed={50} />
      </header>

      <div className={styles.questions__title}>
        <h1>Question 1</h1>

        <p>What is the difference between Attributes and Property?</p>
      </div>

      <div className={styles.questions__options}>
        <Options
          options={[
            {
              subLabel:
                "Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.",
            },
            {
              subLabel:
                "Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.",
            },
            {
              subLabel:
                "Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.",
            },
          ]}
        />
      </div>

      <div className={styles.questions__submit}>
        <button className={styles.questions__btn} type="button">
          Check
        </button>
      </div>
    </Layout>
  );
}
