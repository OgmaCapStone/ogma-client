import React, { useContext, useState, useEffect } from "react";
import { store } from "@context";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import withAuth from "@auth";
import styles from "@styles/Results.module.scss";

function Home() {
  const { state } = useContext(store);
  const router = useRouter();
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  function getIncorrectAnswersCount() {
    const { questions } = state;
    const incorrectAnswers = questions.filter((item) => item === false);

    setIncorrectAnswers(incorrectAnswers.length);
  }

  useEffect(() => {
    if (
      !state.technology &&
      !state.level &&
      Object.keys(state.user).length === 0
    ) {
      router.replace("/profile");
    } else {
      getIncorrectAnswersCount();
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.results__main}>
        <div className={styles.results__info}>
          <h2 className={styles.results__title}>
            You need all correct answers to pass.
          </h2>
          <h2 className={styles.results__subtitle}>Don&apos;t give up! </h2>
          <Image
            width={600}
            height={600}
            src="/images/incompleteDesktop.png"
            alt="Complete test image"
          />
          <p className={styles.results__text}>
            {`${incorrectAnswers} incorrect answers of ${state.questions.length}`}
          </p>
          <button type="button" className={styles.results__primaryBtn}>
            <Link href="/questions">Try again</Link>
          </button>
          <button type="button" className={styles.results__secondaryBtn}>
            <Link href="/profile">Go back</Link>
          </button>
        </div>
      </main>
    </Layout>
  );
}

export default withAuth(Home, "root");
