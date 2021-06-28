import React, { useContext, useEffect, useState } from "react";
import { store } from "@context";
import Layout from "@components/Layout";
import ProgressBar from "@components/ProgressBar";
import Options from "@components/SelectOptions";
import { getQuestions } from "@database/questions";
import styles from "@styles/questions.module.scss";

export default function questions() {
  const { dispatch, state } = useContext(store);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    getQuestions(state.technology, state.level).then((res) =>
      setQuestions(res.questions)
    );
  }, []);

  return (
    <Layout>
      {questions.length !== 0 ? (
        <>
          <header className={styles.questions__header}>
            <ProgressBar
              completed={(activeQuestion * 100) / questions.length}
            />
          </header>
          <div className={styles.questions__title}>
            <h1>Question {activeQuestion + 1}</h1>
            <p>{questions[activeQuestion].question}</p>
            {questions[activeQuestion].image && (
              <img
                src={`${questions[activeQuestion].image}.png`}
                alt="Source code"
              />
            )}
          </div>
          <div className={styles.questions__options}>
            <Options
              options={questions[activeQuestion].answers.map((item) => ({
                subLabel: item,
                value: item,
              }))}
            />
          </div>
          <div className={styles.questions__submit}>
            <button className={styles.questions__btn} type="button">
              Check
            </button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Layout>
  );
}
