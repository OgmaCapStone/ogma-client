import React, { useEffect, useState } from "react";
import CardTechnology from "@components/CardTechnology";
import Options from "@components/SelectOptions";
import { getTechnologies } from "@database/technologies";
import styles from "@styles/ChooseTechnology.module.scss";

export default function choseTechnology() {
  const [technology, settechnology] = useState([]);
  const [SelectedTechnology, setSelectedTechnology] = useState([]);

  useEffect(() => {
    getTechnologies().then((res) => settechnology(res.response));
  }, []);
  return (
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
          setSelectedTechnology(e.target.value);
        }}
        options={technology?.map((tech) => ({
          label: tech.name,
          subLabel: tech.summary,
          image: `${tech.image}.png`,
          value: tech.name.toLowerCase(),
        }))}
        background="glass"
      />
    </div>
  );
}
