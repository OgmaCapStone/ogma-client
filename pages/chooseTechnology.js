import React, { useEffect, useState, useContext } from "react";
import { store } from "@context";
import Link from "next/link";
import Options from "@components/SelectOptions";
import { getTechnologies } from "@database/technologies";
import withAuth from "@auth";
import Layout from "@components/Layout";
import styles from "@styles/ChooseTechnology.module.scss";

function choseTechnology() {
  const { dispatch } = useContext(store);
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    getTechnologies().then((res) => setTechnology(res.response));
  }, []);

  return (
    <Layout>
      <div className={styles.ChooseTechnology}>
        <div className={`${styles.ChooseTechnology__text}`}>
          <h2>Choose a technology</h2>
          <p>
            Practice your skills with a set of questions to improve your level.
          </p>
        </div>
        <Options
          className={`${styles.ChooseTechnology__options}`}
          cardStyles="withImage"
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
