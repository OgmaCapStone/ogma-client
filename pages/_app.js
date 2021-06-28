import React from "react";
import { ContextProvider } from "@context";
import { Provider as AuthProvider } from "next-auth/client";
import "../styles/globals.scss";
import "../styles/_reset.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </AuthProvider>
  );
}

export default MyApp;
