import React, { useState, useEffect } from "react";
import styles from "@styles/TechLevel.module.scss";
import { getUserProgress } from "@database/users";

const TechLevel = ({ level, currentStatus, user }) => {
  const [progress, setProgrees] = useState({});
  // useEffect(() => {
  //   getUserProgress({ user }).then((res) => setProgrees(res.response));
  // }, []);
  return (
    <>
      {/* <section className={styles.TechLevel__success}>{level}</section> */}
      <section className={`${styles.TechLevel} ${styles[currentStatus]}`}>
        {level}
      </section>
    </>
  );
};

export default TechLevel;
