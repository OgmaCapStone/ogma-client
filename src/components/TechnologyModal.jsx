import React from 'react'
import { CloseCircleIcon } from '@icons'
import styles from '@styles/TechModal.module.scss'

const TechnologyModal = () => {
  return (
    <section className={styles.modal_bg}>
      <section className={styles.modal}>
        <section className={styles.modal_container}>
          <section className={styles.modal_header}>
            <img src="/images/Unofficial_JS.png" alt="JS-bg" />
            <button className={styles.tech_level}>
              JavaScrip Levels
            </button>
          </section>
          <section className={styles.modal_body}>
            <section className={styles.modal_level}>Junior</section>
            <section className={styles.modal_level}>Mid</section>
            <section className={styles.modal_level}>Senior</section>
            <section className={styles.modal_level}>Legendary</section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default TechnologyModal