import React, { useContext } from "react";
import { store } from "@context";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import withAuth from "@auth";
import styles from "@styles/Results.module.scss";

function Home() {
  const { dispatch } = useContext(store);
  const router = useRouter();

  function goBack() {
    dispatch({ type: "SET_TECHNOLOGY", technology: "" });
    dispatch({ type: "SET_LEVEL", level: "" });
    dispatch({ type: "RESTART_QUESTIONS" });
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.results__main}>
        <div className={styles.results__info}>
          <h2 className={styles.results__title}>Quiz completed!</h2>
          <h3 className={styles.results__subtitle}>
            You can move to the next level!
          </h3>
          <Image
            width={600}
            height={600}
            src="/images/completeDesktop.png"
            alt="Complete test image"
          />
          <button
            type="button"
            className={styles.results__primaryBtn}
            onClick={goBack}
          >
            Continue
          </button>
        </div>
      </main>
    </Layout>
  );
}

export default withAuth(Home, "root");
