import React from "react";
import Profile from "@components/Profile";
import withAuth from "@auth";

const profile = () => <Profile />;

export default withAuth(profile, "root");
