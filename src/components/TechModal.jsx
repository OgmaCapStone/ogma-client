import React from 'react';
import { ArrowLeftIcon } from '@icons';
import styles from '@styles/TechModal.module.scss';

const TechModal = ({ hideModal }) =>
(
  <section className={styles.modal_bg}>
    <section className={styles.modal_container}>
      <section className={styles.modal_header}>
        <button className={styles.close_btn} type="button" onClick={() => hideModal(false)}><ArrowLeftIcon size={26} color="#286064" /> </button>
        <button className={styles.tech_btn} type="button">JavaScript</button>
      </section>
      <section className={styles.modal_body}>
        <section className={styles.tech_level_success}>Junior</section>
        <section className={styles.tech_level_success}>Mid</section>
        <section className={styles.tech_level_unsuccess }>Senior</section>
        <section className={styles.tech_level_unsuccess }>Legendary</section>
      </section>
    </section>
  </section>
)

export default TechModal