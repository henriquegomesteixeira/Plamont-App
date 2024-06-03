import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "@/lib/db";
import { compareSync } from "bcrypt-ts";

/*
Este código define a configuração do NextAuth para autenticação.
Usamos este código para simplificar a gestão de autenticação na
aplicação, aproveitando a segurança e funcionalidades oferecidas
pelo NextAuth.
*/

export const {
  handlers: { GET, POST }, // Exporta os handlers GET e POST para requisições de autenticação
  signIn, // Exporta a função de signIn para autenticação
  signOut, // Exporta a função de signOut para autenticação
  auth, // Exporta a configuração completa de autenticação
} = NextAuth({
  // Configuração das credenciais de autenticação
  providers: [
    Credentials({
      // Definimos os campos de credenciais
      credentials: {
        email: {},
        password: {},
      },
      // Aqui definimos quem pode autenticar
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = compareSync(password, user.password ?? "");
        if (!passwordMatch) {
          return null;
        }

        return {
          ...user,
          id: user.id.toString(), // Convertendo id para string
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Define a URL da sua página de login personalizada
    signOut: "/", // Define a URL da sua página de logout personalizada
  },
});
