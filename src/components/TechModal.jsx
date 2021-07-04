import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@icons";
import TechLevel from "@components/TechLevel";
import { getTechnologies } from "@database/technologies";
import styles from "@styles/TechModal.module.scss";

const TechModal = ({ hideModal, user, techName, progress }) => {
  const [imgTech, setImgTech] = useState([]);
  useEffect(() => {
    getTechnologies().then((res) => setImgTech(res.response));
  }, []);
  const imgURL = imgTech
    .map((tech) => (tech.name === techName ? tech.image : null))
    .filter((img) => img !== null);
  return (
    <section className={styles.modal_bg}>
      <section className={styles.modal_container}>
        <section className={styles.modal_header}>
          <img id="" src={`${imgURL}.png`} alt="tech-img" />
          <button
            className={styles.close_btn}
            type="button"
            onClick={() => hideModal(false)}
          >
            <ArrowLeftIcon size={26} color="#286064" />{" "}
          </button>
          <button className={styles.tech_btn} type="button">
            {techName}
          </button>
        </section>
        <section className={styles.modal_body}>
          <TechLevel
            level="Junior"
            currentStatus={
              progress[0].percentage <= 30 ? "unsuccess" : "success"
            }
            user={user}
            technology={techName}
          />
          <TechLevel
            level="Mid"
            currentStatus={
              progress[0].percentage <= 60 ? "unsuccess" : "success"
            }
            user={user}
            technology={techName}
          />
          <TechLevel
            level="Senior"
            currentStatus={
              progress[0].percentage <= 90 ? "unsuccess" : "success"
            }
            user={user}
            technology={techName}
          />
          <TechLevel
            level="Legendary"
            currentStatus={
              progress[0].percentage <= 100 ? "unsuccess" : "success"
            }
            user={user}
            technology={techName}
          />
        </section>
      </section>
    </section>
  );
};

export default TechModal;
