import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const providers = [
  Providers.Credentials({
    name: "Credentials",
  }),
  Providers.Google({
    name: "Google",
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    profile(profile) {
      return { ...profile, image: profile.picture };
    },
  }),
  Providers.GitHub({
    name: "GitHub",
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    profile(profile) {
      return { ...profile, image: profile.avatar_url };
    },
  }),
];

const callbacks = {
  async session(session) {
    return session;
  },
};

const options = {
  providers,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
