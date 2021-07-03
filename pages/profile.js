import React, { useEffect, useState, useContext } from "react";
import { store } from "@context";
import { useSession } from "next-auth/client";
import { getUserByEmail } from "@database/users";
import { getProgress } from "@database/progress";
import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import TechModal from "@components/TechModal";
import EditButton from "@components/EditButton";
import ProgressBar from "@components/ProgressCircleBar";
import styles from "@styles/Profile.module.scss";
import withAuth from "@auth";

function profile() {
  const { dispatch } = useContext(store);
  const [session, loading] = useSession();
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (session && !loading) {
      getUserByEmail(session.user.email).then((res) => {
        setUser(res.response);
        dispatch({ type: "SET_USER", user: res.response });
        getProgress(res.response.username)
          .then((res2) => setProgress(res2))
          .catch(() => setProgress(null));
      });
    }
  }, [loading]);

  return (
    <Layout header footer>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for your next job interview"
        />
      </Head>
      <section className={styles.profile_container}>
        <section className={styles.profile_header} />
        <img
          src={`${session?.user.image}.png` || "/images/Default.jpg"}
          id={styles.profile_pic}
          alt="profile-img"
        />
        <section className={styles.profile_content}>
          <section className={styles.profile_edit}>
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
            <button type="button" className={styles.start_btn}>
              <Link href="/choose-technology">Start now</Link>
            </button>
          </section>
        </section>
      </section>
      <section className={styles.skills_container}>
        <h1>Skills</h1>
        {progress ? (
          progress.map((item, index) => (
            <>
              <ProgressBar progress={item.percentage} key={`badge-${index}`} />{" "}
              <p>{item.name}</p>
            </>
          ))
        ) : (
          <p>There&apos;s no data</p>
        )}
        <button
          type="button"
          className={styles.modal_btn}
          onClick={() => setShowModal(true)}
        >
          Open skill
        </button>
        {showModal && (
          <TechModal hideModal={setShowModal} user={user.username} />
        )}
      </section>
    </Layout>
  );
}

export default withAuth(profile, "root");
