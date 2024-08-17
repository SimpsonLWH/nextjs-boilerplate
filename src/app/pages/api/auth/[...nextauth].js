import NextAuth from 'next-auth';
import { EmailProvider } from 'next-auth/providers';

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.MAILGUN_DOMAIN,
        port: 587,
        auth: {
          user: 'postmaster@yourdomain.com',
          pass: process.env.MAILGUN_API_KEY,
        },
      },
      from: `NextAuth <${process.env.MAILGUN_FROM_EMAIL}>`,
    }),
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});