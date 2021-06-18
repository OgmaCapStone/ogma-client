import React, { useReducer } from "react";
import Link from "next/link";
import { initialState, reducer } from "@reducers/login";

export default function login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
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
        <button type="button">Google</button>
        <button type="button">GitHub</button>
      </div>
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}
