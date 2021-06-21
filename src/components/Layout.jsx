import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@components/Navbar"));
const Footer = dynamic(() => import("@components/Footer"));

export default function Layout({ children, header, footer }) {
  return (
    <>
      {header && <Header />}
      <main className="main container">{children}</main>
      {footer && <Footer />}
    </>
  );
}
