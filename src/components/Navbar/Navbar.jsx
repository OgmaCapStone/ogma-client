import React from 'react'
import styles from '../Navbar/navbar.module.scss'


const Navbar = () => {
  return (
    <section className={styles.header}>
      <section className={styles.navbar}>
        <section className={styles.navbarBrand}>
          <h1>Ogma</h1>
        </section>
        <section className={styles.btnNavbar}>
          <button className={styles.btnLogin}>Log In</button>
          <button className={styles.btnStart}>Start Now</button>
        </section>
      </section>
    </section>
  )
}

export default Navbar