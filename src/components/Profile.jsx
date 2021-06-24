import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { getUserByEmail } from '@database/users'
import Layout from '@components/Layout'
import styles from '@styles/Profile.module.scss'

const Profile = () => {
  const [session, loading] = useSession()
  const [user, setUser] = useState([])

  useEffect(() => {
    if (!loading && session) {
      getUserByEmail(session.user.email)
        .then(res => setUser(res.response))
    }
  }, [])

  return (
    <Layout header footer>
      <section className={styles.profile_container}>
        <section className={styles.profile_header}>
          {/* <img src="/images/double-bubble.png" alt="bg-pattern" id={styles.bg_pattern}/> */}
        </section>
        <img src="/images/Crop Photo LinkedIn.jpeg" id={styles.profile_pic} alt="profile-img" />
        <section className={styles.profile_content}>
          <section className={styles.profile_name}>
            <h1>{user?.name}</h1>
          </section>
          <section className={styles.profile_sub}>
            <span id={styles.level}>Mid Developer</span>
            <span id={styles.techs}>{user?.prefered_technologies?.map(tech => tech)}</span>
          </section>
          <section className={styles.profile_btn}>
            <button type="button" className={styles.start_btn}>Start now</button>
          </section>
        </section>
      </section>
      <section className={styles.skills_container}>
        <h1>Skills</h1>
      </section>
    </Layout>
  )
}

export default Profile