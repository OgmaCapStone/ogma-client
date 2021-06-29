import React, { useEffect, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { store } from "@context";
import Options from "@components/SelectOptions";
import withAuth from "@auth";
import { DotListIcon } from "@icons";
import styles from "@styles/ChooseDifficulty.module.scss";

function chooseDifficulty() {
  const { dispatch, state } = useContext(store);
  const router = useRouter();

  useEffect(() => {
    if (!state.technology) router.replace("/chooseTechnology");
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
        <button type="button" className={styles.ChooseDifficulty__btn}>
          <Link href="/questions">Go to test</Link>
        </button>
      </div>
    </Layout>
  );
}

export default withAuth(chooseDifficulty, "root");
