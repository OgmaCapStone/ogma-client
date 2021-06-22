import React from "react";
import { Provider as AuthProvider } from "next-auth/client";
import "../styles/globals.scss";
import "../styles/_reset.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
