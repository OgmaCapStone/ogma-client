import React from "react";
import { useSession, signOut } from "next-auth/client";
import { OgmaLogoIcon } from "@icons";
import styles from "@styles/Navbar.module.scss";

const Navbar = () => {
  const [session, loading] = useSession();

  return (
    <section className={styles.header}>
      <section className={`container ${styles.navbar}`}>
        <section className={styles.navbar_brand}>
          <OgmaLogoIcon size={40} color="#FFF" />
        </section>
        {!loading && session && (
          <button type="button" onClick={signOut}>
            Log Out
          </button>
        )}
      </section>
    </section>
  );
};

export default Navbar;
