import React, { useEffect, useState, useContext } from "react";
import { store } from "@context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "@components/Layout";
import Options from "@components/SelectOptions";
import { getTechnologies } from "@database/technologies";
import withAuth from "@auth";
import { ErrorIcon } from "@icons";
import styles from "@styles/ChooseTechnology.module.scss";

const Toast = dynamic(() => import("@components/Toast"));

function choseTechnology() {
  const { state, dispatch } = useContext(store);
  const router = useRouter();
  const [technology, setTechnology] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (Object.keys(state.user).length === 0) router.replace("/profile");
    getTechnologies().then((res) => setTechnology(res.response));
  }, []);

  function handleChange(e) {
    const { value } = e.target;

    setSelectedTechnology(value);
    dispatch({ type: "SET_TECHNOLOGY", technology: value });
  }

  function handleSubmit() {
    if (selectedTechnology) {
      router.replace("/chooseDifficulty");
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
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
      </Head>
      {!technology ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.ChooseTechnology}>
          <div className={`${styles.ChooseTechnology__text}`}>
            <h2>Choose a technology</h2>
            <p>
              Practice your skills with a set of questions to improve your
              level.
            </p>
          </div>
          <Options
            className={styles.ChooseTechnology__options}
            cardStyles="withImage"
            onChange={handleChange}
            options={technology?.map((tech) => ({
              label: tech.name,
              subLabel: tech.summary,
              image: `${tech.image}.png`,
              value: tech.name.toLowerCase(),
            }))}
            background="glass"
          />
          <button
            type="button"
            className={styles.ChooseTechnology__btn}
            onClick={handleSubmit}
          >
            Choose difficulty
          </button>
        </div>
      )}
      {alert && (
        <Toast
          toastList={[
            {
              backgroundColor: "#d8000c",
              title: "Error!",
              description: "You must choose a technology first!",
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

export default withAuth(choseTechnology, "root");
