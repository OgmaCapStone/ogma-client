import React from "react";
import { OgmaLogoIcon } from "@icons";
import styles from "@styles/Navbar.module.scss";

const Navbar = () => (
  <section className={styles.header}>
    <section className={`container ${styles.navbar}`}>
      <section className={styles.navbar_brand}>
        <OgmaLogoIcon size={40} color="#FFF" />
      </section>
    </section>
  </section>
);

export default Navbar;
