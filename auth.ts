import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import connectToDatabase from '@/lib/mongoose';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // MongoDBAdapter automatically handles saving users for OAuth logins (e.g. Google)
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'user',
        };
      },
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) return null;
  
          await connectToDatabase();
          
          const user = await User.findOne({ email: credentials.email });
          // If no user or if they signed up exclusively via Google (no password)
          if (!user || !user.password) return null;
  
          const passwordsMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
  
          if (passwordsMatch) {
            // Return user object that matches the token expectation
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
  
          return null;
        },
      }),
  ],
});
