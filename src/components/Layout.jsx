import React from "react";

export default function Layout({ children, header, footer }) {
  return (
    <>
      {header && <header>Ogma app</header>}
      {children}
      {footer && <footer>&copy; 2021 | Ogma app</footer>}
    </>
  );
}
