import React, { useReducer } from "react";
import Link from "next/link";
import { initialState, reducer } from "@reducers/login";
import { GithubIcon, GoogleIcon } from "@icons";
import Layout from "@components/Layout";
import styles from "@styles/Login.module.scss";

export default function login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Layout header footer>
      <div className={styles.login__container}>
        <h1 className={styles.login__h1}>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__group}>
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="email"
                value={state.email}
                onChange={(e) => dispatch({ type: "change", e })}
              />
            </label>
          </div>
          <div className={styles.login__group}>
            <label htmlFor="password">
              Password
              <input
                name="password"
                type="password"
                value={state.password}
                onChange={(e) => dispatch({ type: "change", e })}
              />
            </label>
          </div>
          <button type="submit" className={styles.login__submit}>
            Log In
          </button>
        </form>
        <p className={styles.login__divider}>or</p>
        <div className={styles.login__buttons}>
          <button type="button" className={styles.login__google}>
            <GoogleIcon size={16} color="#fff" /> Google
          </button>
          <button type="button" className={styles.login__github}>
            <GithubIcon size={16} color="#fff" /> GitHub
          </button>
        </div>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </Layout>
  );
}
