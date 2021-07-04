import React, { useContext } from "react";
import { useRouter } from "next/router";
import { store } from "@context";
import styles from "@styles/TechLevel.module.scss";

const TechLevel = ({ level, currentStatus, technology }) => {
  const { dispatch } = useContext(store);
  const router = useRouter();

  function handleClick() {
    dispatch({ type: "SET_TECHNOLOGY", technology });
    dispatch({ type: "SET_LEVEL", level: level.toLowerCase() });
    router.replace("/questions");
  }

  return (
    <section
      className={`${styles.TechLevel} ${styles[currentStatus]}`}
      onClick={handleClick}
    >
      {level}
    </section>
  );
};

export default TechLevel;
