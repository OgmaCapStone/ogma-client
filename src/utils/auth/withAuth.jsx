import React from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function withAuth(WrappedComponent, type) {
  return (props) => {
    const [session, loading] = useSession();
    const router = useRouter();

    if (!session && !loading && type === "root") {
      router.replace("/");
      return null;
    }

    if (session && !loading && type === "profile") {
      router.replace("/profile");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
