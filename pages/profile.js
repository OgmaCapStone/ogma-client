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
import SkillCard from "@components/SkillCard";
import styles from "@styles/Profile.module.scss";
import withAuth from "@auth";

function profile() {
  const { dispatch, state } = useContext(store);
  const [session, loading] = useSession();
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(null);
  const [showModal, setShowModal] = useState([false, ""]);

  const showTechModal = (name) => {
    setShowModal([true, name])
  }

  function getDevLevel() {
    let level = "";
    const percentSum = progress.reduce(
      (prev, current) => current.percentage + prev,
      0
    );
    const avgSum = percentSum / progress.length;

    if (avgSum <= 100) level = "legendary";
    if (avgSum <= 90) level = "senior";
    if (avgSum <= 60) level = "mid";
    if (avgSum <= 30) level = "junior";

    return level;
  }

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
          src={state?.user.profile_pic || "/images/default.jpg"}
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
            {progress && (
              <span id={styles.level}>{`${getDevLevel()} developer`}</span>
            )}
            <span id={styles.techs}>
              {user.prefered_technologies?.map((item) => `${item} • `)}
            </span>
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
              <SkillCard
                onClick={() => showTechModal(item.name)}
                progress={item.percentage}
                key={`badge-${index}`}
                techName={item.name}
              />{" "}
              {/* <p>{item.name}</p> */}
            </>
          ))
        ) : (
          <p>There&apos;s no data</p>
        )}
        {showModal[0] && (
          <TechModal hideModal={setShowModal} user={user.username} techName={showModal[1]} />
        )}
      </section>
    </Layout>
  );
}

export default withAuth(profile, "root");
