import React from "react";
import Header from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children, header, footer }) {
  return (
    <>
      {header && <Header />}
      <main className="main container">{children}</main>
      {footer && <Footer />}
    </>
  );
}
