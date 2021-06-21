import React from "react";
import Header from "@components/Navbar";
import Footer from "@components/Footer";
import styles from "@styles/Layout.module.scss";

export default function Layout({ children, header, footer }) {
  return (
    <div className={styles.layout__background}>
      {header && <Header />}
      {children}
      {footer && <Footer />}
      <div
        className={`${styles.layout__circle} ${styles.layout__circle_top}`}
      />
      <div
        className={`${styles.layout__circle} ${styles.layout__circle_bottom}`}
      />
    </div>
  );
}
