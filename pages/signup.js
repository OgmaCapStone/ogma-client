import React, { useReducer } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { initialState, reducer } from "@reducers/signup";
import Layout from "@components/Layout";
import { GoogleIcon, GithubIcon } from "@icons";
import withAuth from "@auth";
import { createUser } from "@database/users";
import styles from "@styles/Login.module.scss";

function signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    await createUser({
      name: state.name,
      email: state.email,
      password: state.password,
      login_type: "credentials",
      username: state.username,
      badges: null,
      prefered_technologies: null,
      profile_pic: "",
    }).then(() => {
      signIn("credentials", {
        username: state.email,
        password: state.password,
        callbackUrl: "/",
        redirect: false,
      }).then((res) => res.url && router.push("/profile"));
    });
  }

  return (
    <Layout header footer>
      <Head>
      <title>Ogma App</title>
      <meta
        name="description"
        content="Web app to practice for yout next job interview"
      />
      </Head>
      <div className={styles.login__container}>
        <h1 className={styles.login__h1}>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__group}>
            <label htmlFor="username">Username</label>
            <input
              className={styles.login__input}
              id="username"
              name="username"
              type="text"
              value={state.username}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <div className={styles.login__group}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.login__input}
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <div className={styles.login__group}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.login__input}
              id="name"
              name="name"
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <div className={styles.login__group}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.login__input}
              id="password"
              name="password"
              type="password"
              value={state.password}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <button type="submit" className={styles.login__submit}>
            Sign Up
          </button>
        </form>
        <p className={styles.login__divider}>or</p>
        <div className={styles.login__buttons}>
          <button
            type="button"
            className={styles.login__google}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            <GoogleIcon size={18} color="#fff" /> Google
          </button>
          <button
            type="button"
            className={styles.login__github}
            onClick={() => signIn("github", { callbackUrl: "/profile" })}
          >
            <GithubIcon size={18} color="#fff" /> GitHub
          </button>
        </div>
        <p className={styles.login__signup}>
          Already have an account?{" "}
          <Link href="/login" className="link link-primary">
            Log In
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default withAuth(signup, "profile");
