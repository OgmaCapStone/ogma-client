import React from "react";
import styles from "@styles/Footer.module.scss";

const Footer = () => (
  <footer>
    <section className={styles.footer_container}>
      <section className={`container ${styles.footer_copy}`}>
        <p>© 2021 - Ogma app. All rights reserved.</p>
      </section>
      <section className={styles.footer_terms}>
        <p>Terms & Conditions | Privacy Policy</p>
      </section>
    </section>
  </footer>
);

export default Footer;
