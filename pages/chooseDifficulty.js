import React, { useEffect, useContext, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { store } from "@context";
import Options from "@components/SelectOptions";
import withAuth from "@auth";
import { DotListIcon, ErrorIcon } from "@icons";
import styles from "@styles/ChooseDifficulty.module.scss";

const Toast = dynamic(() => import("@components/Toast"));

function chooseDifficulty() {
  const { dispatch, state } = useContext(store);
  const router = useRouter();
  const [selectedDifficult, setSelectedDifficult] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (!state.technology) router.replace("/chooseTechnology");
  }, []);

  function handleChange(e) {
    const { value } = e.target;

    setSelectedDifficult(value);
    dispatch({ type: "SET_LEVEL", level: value });
  }

  function handleSubmit() {
    if (selectedDifficult) {
      router.replace("/questions");
    } else {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Choose Difficulty</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
      </Head>
      <div className={styles.ChooseDifficulty}>
        <div className={styles.ChooseDifficulty__text}>
          <h2>Choose difficulty</h2>
          <p>Select the level you would like to start with.</p>
        </div>
        <div className={styles.ChooseDifficulty__CardContainer}>
          <Options
            onChange={handleChange}
            options={[
              {
                label: "Junior",
                value: "junior",
                icon: <DotListIcon size={20} colors={["#00292B", "#64DCE0"]} />,
              },
              {
                label: "Mid",
                value: "mid",
                icon: <DotListIcon size={20} colors={["#64DCE0", "#193B3D"]} />,
              },
              {
                label: "Senior",
                value: "senior",
                icon: <DotListIcon size={20} colors={["#193B3D", "#474949"]} />,
              },
              {
                label: "Legendary",
                value: "legendary",
                icon: <DotListIcon size={20} colors={["#474949", "#6DA8AA"]} />,
              },
            ]}
            background="glass"
          />
        </div>
        <button
          type="button"
          className={styles.ChooseDifficulty__btn}
          onClick={handleSubmit}
        >
          Go to test
        </button>
      </div>
      {alert && (
        <Toast
          toastList={[
            {
              backgroundColor: "#d8000c",
              title: "Error!",
              description: "You must choose a difficulty first!",
              icon: <ErrorIcon />,
            },
          ]}
          position="top-left"
          autoDelete
          autoDeleteTime={3000}
        />
      )}
    </Layout>
  );
}

export default withAuth(chooseDifficulty, "root");
