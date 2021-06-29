import React, { useContext, useEffect, useState } from "react";
import { store } from "@context";
import Layout from "@components/Layout";
import Head from "next/head";
import ProgressBar from "@components/ProgressBar";
import Options from "@components/SelectOptions";
import { getQuestions } from "@database/questions";
import withAuth from "@auth";
import styles from "@styles/questions.module.scss";

function questions() {
  const { dispatch, state } = useContext(store);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    getQuestions(state.technology, state.level).then((res) =>
      setQuestions(res.questions)
    );
  }, []);

  function checkAnswer(e) {
    const { value } = e.target;
    const correctAnswer =
      questions[activeQuestion].answers[
        questions[activeQuestion].correct_answer_index
      ];

    console.log(value, correctAnswer, value === correctAnswer);
    setAnswer([value === correctAnswer, e.target]);
  }

  function nextQuestion() {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((state) => state + 1);
      dispatch({ type: "RATE_QUESTION", question: answer[0] });
      answer[1].checked = false;
    }
  }

  return (
    <Layout>
      <Head>
      <title>Ogma App</title>
      <meta
        name="description"
        content="Web app to practice for yout next job interview"
      />
      </Head>
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
              question={activeQuestion}
              onChange={checkAnswer}
              options={questions[activeQuestion].answers.map((item) => ({
                subLabel: item,
                value: item,
              }))}
            />
          </div>
          <div className={styles.questions__submit}>
            <button
              className={styles.questions__btn}
              type="button"
              onClick={nextQuestion}
            >
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

export default withAuth(questions, "root");
