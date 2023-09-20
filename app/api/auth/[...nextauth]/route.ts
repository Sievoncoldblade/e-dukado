import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type User = {
  name: string;
  email: string;
  password: string;
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@doe.com" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };

        const users: User[] = [
          {
            email: "owenharvey@pup.edu.ph",
            password: "123",
            name: "Owen Harvey B.",
          },
          {
            email: "johnoswald@pup.edu.ph",
            password: "123",
            name: "John Oswald R.",
          },
        ];
        //perform logic for login
        const user = users.filter((user) => user.email == email)[0];

        if (user?.password == password) {
          const { password, ...userDetails } = user;
          return { id: "1", ...userDetails };
        } else {
          throw new Error("Invalid Credentials");
        }

        // find user from db
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
