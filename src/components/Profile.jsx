import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { getUserByEmail } from '@database/users';
import Layout from '@components/Layout';
import TechModal from '@components/TechModal'
import EditButton from '@components/EditButton'
import styles from '@styles/Profile.module.scss';

const Profile = () => {
  const [session, loading] = useSession()
  const [user, setUser] = useState([])
  const [showModal, setShowModal] = useState(false);

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
        <img src="/images/Default.jpg" id={styles.profile_pic} alt="profile-img" />
        <section className={styles.profile_content}>
          <section className={styles.edit_Profile_btn}>
            <EditButton />
          </section>
          <section className={styles.profile_name}>
            <h1>{user.name}</h1>
          </section>
          <section className={styles.profile_sub}>
            <span id={styles.level}>Mid Developer</span>
            <span id={styles.techs}>Insert prefered technologies here!</span>
          </section>
          <section className={styles.profile_btn}>
            <button type="button" className={styles.start_btn}>Start now</button>
          </section>
        </section>
      </section>
      <section className={styles.skills_container}>
        <h1>Skills</h1>
        <button type="button" onClick={() => setShowModal(true)}>Open</button>
        {showModal && <TechModal hideModal={setShowModal} />}
      </section>
    </Layout>
  )
}

export default Profile