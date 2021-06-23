import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { compareSync } from "bcrypt";
import { createUser, getUser, getUserByEmail } from "@database/users";

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
      return {
        ...profile,
        image: profile.picture,
        username: profile.email.split("@")[0],
      };
    },
  }),
  Providers.GitHub({
    name: "GitHub",
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    profile(profile) {
      return {
        ...profile,
        image: profile.avatar_url,
        username: profile.email.split("@")[0],
      };
    },
  }),
];

const callbacks = {
  async session(session) {
    return session;
  },
  async signIn(user, account) {
    const createSocialUser = async () => {
      const userDB = await getUserByEmail(user.email)
        .then((res) => res.response)
        .catch(() => { });

      if (!userDB) {
        const res = await createUser({
          name: user.name,
          email: user.email,
          password: "",
          login_type: account.provider,
          username: user.username,
          badges: null,
          prefered_technologies: null,
          profile_pic: user.image,
        });

        return res;
      }

      return true;
    };
    if (account.provider === "google" || account.provider === "github")
      createSocialUser();
  },
};

const options = {
  providers,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
