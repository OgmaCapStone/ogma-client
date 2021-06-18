import React from "react";
import styles from "@styles/Layout.module.scss";

export default function Layout({ children, header, footer }) {
  return (
    <div className={styles.layout__background}>
      {header && <header>Ogma app</header>}
      {children}
      {footer && <footer>&copy; 2021 | Ogma app</footer>}
      <div
        className={`${styles.layout__circle} ${styles.layout__circle_top}`}
      />
      <div
        className={`${styles.layout__circle} ${styles.layout__circle_bottom}`}
      />
    </div>
  );
}
