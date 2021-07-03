import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "@context";
import Layout from "@components/Layout";
import Head from "next/head";
import ProgressBar from "@components/ProgressBar";
import Options from "@components/SelectOptions";
import { getQuestions } from "@database/questions";
import withAuth from "@auth";
import { updateProgress } from "@database/progress";
import technologiesPercent from "src/utils/constants/technologies";
import Toast from "@components/Toast";
import ConfirmationModal from "@components/ConfirmationModal";
import { ErrorIcon, CloseIcon } from "@icons";
import styles from "@styles/Questions.module.scss";

function questions() {
  const { dispatch, state } = useContext(store);
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!state.technology && !state.level) {
      router.replace("/chooseTechnology");
    } else {
      getQuestions(state.technology, state.level).then((res) =>
        setQuestions(res.questions)
      );
    }
  }, []);

  function checkAnswer(e) {
    const { value } = e.target;
    const correctAnswer =
      questions[activeQuestion].answers[
        questions[activeQuestion].correct_answer_index
      ];

    console.log(value === correctAnswer);
    setAnswer([value === correctAnswer, e.target]);
  }

  function nextQuestion() {
    if (answer) {
      if (activeQuestion < questions.length) {
        dispatch({ type: "RATE_QUESTION", question: answer[0] });
        answer[1].checked = false;
      }

      if (activeQuestion < questions.length - 1) {
        setActiveQuestion((state) => state + 1);
      } else {
        const checkCorrect = state.questions.filter((item) => item === false);

        if (checkCorrect.length === 0) {
          updateProgress({
            percentage:
              technologiesPercent[`${state.technology}-${state.level}`],
            user: {
              username: state.user.username,
            },
            technology: {
              name: state.technology,
            },
          });
          router.replace("/complete-test");
        } else {
          router.replace("/incomplete-test");
        }
      }
    } else {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }

  function closeTest() {
    dispatch({ type: "SET_TECHNOLOGY", technology: "" });
    dispatch({ type: "SET_LEVEL", level: "" });
    router.replace("/profile");
  }

  return (
    <Layout>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for your next job interview"
        />
      </Head>

      {questions.length !== 0 ? (
        <>
          <div
            className={styles.questions__close}
            onClick={() => setModal(true)}
          >
            <CloseIcon size={16} color="#000" />
          </div>
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
      {alert && (
        <Toast
          toastList={[
            {
              backgroundColor: "#d8000c",
              title: "Error!",
              description: "You must choose an answer!",
              icon: <ErrorIcon />,
            },
          ]}
          position="top-left"
          autoDelete
          autoDeleteTime={3000}
        />
      )}
      {modal && (
        <ConfirmationModal
          title="Are you sure you want to exit the test?"
          onAccept={closeTest}
          onClose={() => setModal(false)}
        />
      )}
    </Layout>
  );
}

export default withAuth(questions, "root");
