import React from 'react';
import styles from '@styles/TechModal.module.scss';

const TechModal = ({ hideModal }) =>
(
  <section className={styles.modal_bg}>
    <section className={styles.modal_container}>
      <section className={styles.modal_header}>
        <button className={styles.close_btn} type="button" onClick={() => hideModal(false)}>X</button>
        <section className={styles.modal_tech_btn}>
          <button className={styles.tech_btn} type="button">JavaScript</button>
        </section>
      </section>
      <section className={styles.modal_body}>
        <section className={styles.tech_level}>Junior</section>
        <section className={styles.tech_level}>Mid</section>
        <section className={styles.tech_level} id={styles.failed_level}>Senior</section>
        <section className={styles.tech_level} id={styles.failed_level}>Legendary</section>
      </section>
    </section>
  </section>
)

export default TechModal