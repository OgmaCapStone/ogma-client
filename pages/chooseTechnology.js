import React, { useEffect, useState, useContext } from "react";
import { store } from "@context";
import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import Options from "@components/SelectOptions";
import { getTechnologies } from "@database/technologies";
import withAuth from "@auth";
import styles from "@styles/ChooseTechnology.module.scss";

function choseTechnology() {
  const { dispatch } = useContext(store);
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    getTechnologies().then((res) => setTechnology(res.response));
  }, []);

  return (
    <Layout>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
      </Head>
      <div className={styles.ChooseTechnology}>
        <div className={styles.ChooseTechnology__text}>
          <h2>Choose a technology</h2>
          <p>
            Practice your skills with a set of questions to improve your level.
          </p>
        </div>
        <Options
          className={styles.ChooseTechnology__options}
          onChange={(e) => {
            dispatch({ type: "SET_TECHNOLOGY", technology: e.target.value });
          }}
          options={technology?.map((tech) => ({
            label: tech.name,
            subLabel: tech.summary,
            image: `${tech.image}.png`,
            value: tech.name.toLowerCase(),
          }))}
          background="glass"
        />
        <button type="button" className={styles.ChooseTechnology__btn}>
          <Link href="chooseDifficulty">Choose difficulty</Link>
        </button>
      </div>
    </Layout>
  );
}

export default withAuth(choseTechnology, "root");
