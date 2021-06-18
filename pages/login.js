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
    <Layout>
      <div className={styles.login__container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={(e) => dispatch({ type: "change", e })}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={(e) => dispatch({ type: "change", e })}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        <p>or</p>
        <div>
          <button type="button">
            <GoogleIcon size={16} /> Google
          </button>
          <button type="button">
            <GithubIcon size={16} /> GitHub
          </button>
        </div>
        <p>
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </Layout>
  );
}
