import React from "react";
import CardTechnology from "@components/CardTechnology";
import withAuth from "@auth";
import styles from "@styles/ChooseTechnology.module.scss";

function choseTechnology() {
  return (
    <div className={styles.ChooseTechnology}>
      <div className={styles.ChooseTechnology__text}>
        <h2>Choose a technology</h2>
        <p>
          Practice your skills with a set of questions to improve your level.
        </p>
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

export default withAuth(choseTechnology, "root");
