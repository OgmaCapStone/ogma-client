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
  }),
  Providers.GitHub({
    name: "GitHub",
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

const options = {
  providers,
};

export default (req, res) => NextAuth(req, res, options);
