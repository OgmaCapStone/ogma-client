import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@icons";
import TechLevel from "@components/TechLevel";
import { getTechnologies } from "@database/technologies"
import styles from "@styles/TechModal.module.scss";

const TechModal = ({ hideModal, user, techName }) => {
  const [imgTech, setImgTech] = useState([])
  useEffect(() => {
    getTechnologies().then((res) => setImgTech(res.response));
  })
  const imgURL = imgTech
    .map((tech) => (tech.name === techName ? tech.image : null))
    .filter((img) => img !== null);
  return (
    <section className={styles.modal_bg}>
      <section className={styles.modal_container}>
        <section className={styles.modal_header}>
          <img
            id=""
            src={`${imgURL}.png`}
            alt="tech-img"
          />
          <button
            className={styles.close_btn}
            type="button"
            onClick={() => hideModal(false)}
          >
            <ArrowLeftIcon size={26} color="#286064" />{" "}
          </button>
          <button className={styles.tech_btn} type="button">
            JavaScript
          </button>
        </section>
        <section className={styles.modal_body}>
          <TechLevel level="Junior" currentStatus="success" user={user} />
          <TechLevel level="Mid" currentStatus="unsuccess" user={user} />
          <TechLevel level="Senior" currentStatus="unsuccess" user={user} />
          <TechLevel level="Legendary" currentStatus="unsuccess" user={user} />
        </section>
      </section>
    </section>
  );
}

export default TechModal;
