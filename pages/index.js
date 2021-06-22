import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import { OgmaLogoIcon } from "@icons";
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <Layout header footer>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroImage}>
          <Image width={580} height={470} src="/public/images/heroImage.png" />
        </div>
        <div className={styles.heroInfo}>
          <h1 className={styles.title}>Welcome to</h1>
          <OgmaLogoIcon size={60} color="#6da8aa" />
          <p className={styles.text}>Practice a tech language for free!</p>
          <button type="button" className={styles.primaryBtn}>
            <Link href="/signin">Create account</Link>
          </button>
          <button type="button" className={styles.primaryBtn}>
            <Link href="/login">Log in</Link>
          </button>
        </div>
      </main>
    </Layout>
  );
}
