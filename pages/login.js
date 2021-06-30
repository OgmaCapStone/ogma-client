import React, { useReducer, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { initialState, reducer } from "@reducers/login";
import { GithubIcon, GoogleIcon, ErrorIcon } from "@icons";
import Layout from "@components/Layout";
import withAuth from "@auth";
import Toast from "@components/Toast";
import styles from "@styles/Login.module.scss";

function login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    signIn("credentials", {
      username: state.email,
      password: state.password,
      callbackUrl: "/login",
      redirect: false,
    }).then((res) => {
      if (res.url && !res.url?.includes("error")) {
        router.push("/profile");
      } else {
        setAlert(true);

        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }
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
        <h1 className={styles.login__h1}>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__group}>
            <label htmlFor="email">Username</label>
            <input
              id="email"
              className={styles.login__input}
              name="email"
              type="text"
              value={state.email}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <div className={styles.login__group}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className={styles.login__input}
              name="password"
              type="password"
              value={state.password}
              onChange={(e) => dispatch({ type: "change", e })}
              required
            />
          </div>
          <button type="submit" className={styles.login__submit}>
            Log In
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
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
      {alert && (
        <Toast
          toastList={[
            {
              backgroundColor: "#d8000c",
              title: "Error!",
              description: "Invalid username or password",
              icon: <ErrorIcon />,
            },
          ]}
          position="top-left"
          autoDelete
          autoDeleteTime={3000}
        />
      )}
    </Layout>
  );
}

export default withAuth(login, "profile");
