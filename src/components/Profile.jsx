import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import styles from '@styles/Profile.module.scss'

const Profile = () => {
  return (
    <section>
      <Navbar/>
      <section className={styles.main_container}>
        <section className={styles.profile_container}>
          <section className={styles.profile_header}>
            {/* <img src="/images/double-bubble.png" alt="bg-pattern" id={styles.bg_pattern}/> */}
          </section>
            <img src="/images/Crop Photo LinkedIn.jpeg" id={styles.profile_pic}/>
          <section className={styles.profile_content}>
            <section className={styles.profile_name}>
              <h1>Juan Martínez</h1>
            </section>
            <section className={styles.profile_sub}>
              <span id={styles.level}>Mid Developer</span>
              <span id={styles.techs}>Python • Javascript</span>
            </section>
            <section className={styles.profile_btn}>
              <button className={styles.start_btn}>Start now</button>
            </section>
          </section>
        </section>
        <section className={styles.skills_container}>
          <h1>Skills</h1>
        </section>
      </section>
      <Footer/>
    </section>
  )
}

export default Profile