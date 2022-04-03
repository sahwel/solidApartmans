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

        const expires = new Date(
          new Date().getTime() +
            parseInt(process.env.NEXT_PUBLIC_TOKEN_EXP || '42900000')
        )
        return {
          token: credentials.token,
          expires: expires,
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token
        token.expires = user.expires
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.token = token.token
        session.expires = token.expires as string
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
