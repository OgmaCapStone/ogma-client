import React from "react";
import styles from "@styles/CardTechnology.module.scss";

const CardTechnology = ({
  technologyName,
  technologyDescription,
  technologyImage,
}) => (
  <div className={styles.cardTechnology__content}>
    <div className={styles.cardTechnology__card}>
      <div className={styles.cardTechnology__info}>
        <div className={styles.cardTechnology__info__profileinfo}>
          <h3>{technologyName}</h3>
          <p>{technologyDescription}</p>
        </div>
        <img src={technologyImage} alt="technology image" />
      </div>
    </div>
  </div>
);

export default CardTechnology;
