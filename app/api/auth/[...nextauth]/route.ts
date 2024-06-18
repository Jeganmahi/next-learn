import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma, PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { Session } from "inspector";
const prisma = new PrismaClient()


export const authOptions:NextAuthOptions = {
  adapter:PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "email",type:"email",placeholder:"email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(Credentials,req) {
        if(!Credentials?.email || !Credentials.password){
          return null;
        }
        const data = await prisma.user.findUnique({where:{email:Credentials.email}});
        if(!data){
          return null;
        }
        
        const passwordmatch  = await bcrypt.compare(Credentials.password,data.hashedPassword!);

        return passwordmatch? data : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session:{
    strategy:'jwt'
  }

}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }