import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { compareSync } from "bcrypt";
import { getUser } from "@database/users";

const providers = [
  Providers.Credentials({
    name: "Credentials",
    authorize: async (credentials) => {
      const user = await getUser(credentials.username)
        .then((res) => res.response)
        .catch((err) => {
          const { message } = err.response.data;

          throw new Error(message);
        });

      if (user) {
        if (compareSync(credentials.password, user.password)) {
          return {
            name: user.name,
            email: user.email,
            image: user.image,
          };
        }
      }

      return false;
    },
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
