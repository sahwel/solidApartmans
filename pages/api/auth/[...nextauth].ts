import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        token: {},
      },
      authorize(credentials) {
        if (!credentials) return null

        return {
          token: credentials.token,
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.token = token.token
        session.expires = '42900000'
      }

      return session
    },
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
})
