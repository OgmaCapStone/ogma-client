import React from "react";
import CardTechnology from "@components/CardTechnology";
import styles from "@styles/ChooseTechnology.module.scss";

export default function choseTechnology() {
  return (
    <div className={styles.ChooseTechnology}>
      <div className={styles.ChooseTechnology__text}>
        <h2>Choose technology</h2>
        <p>Paragraph's summary</p>
      </div>
      <CardTechnology
        technologyName="JavaScript"
        technologyDescription="Technology’s summary"
        technologyImage="https://dummyimage.com/100x100/000/fff"
      />
      <CardTechnology
        technologyName="Python"
        technologyDescription="Technology’s summary"
        technologyImage="https://dummyimage.com/100x100/000/fff"
      />
      <CardTechnology
        technologyName="HTML"
        technologyDescription="Technology’s summary"
        technologyImage="https://dummyimage.com/100x100/000/fff"
      />
      <CardTechnology
        technologyName="CSS"
        technologyDescription="Technology’s summary"
        technologyImage="https://dummyimage.com/100x100/000/fff"
      />
      <CardTechnology
        technologyName="React"
        technologyDescription="Technology’s summary"
        technologyImage="https://dummyimage.com/100x100/000/fff"
      />
    </div>
  );
}
