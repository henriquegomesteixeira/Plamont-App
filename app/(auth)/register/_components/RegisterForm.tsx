"use client";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import register from "../_actions/register";
import Image from "next/image";
import { useState } from "react";
import BannerProfile from "./bannerProfile";

export default function RegisterForm() {
  const [openEye, setOpenEye] = useState(true);
  return (
    <div className="flex min-h-screen flex-col bg-second-background">
      <div className="my-6 flex h-[15%] flex-col items-center justify-center md:h-[20%]">
        <Image
          src="/logoblack.png"
          width={220}
          height={48}
          alt="Logo Plamont 25 Anos"
        />
      </div>
      <div className="flex h-[85%] w-full flex-col justify-between rounded-lg bg-gradient-to-b from-white via-second-background to-second-background p-5">
        <BannerProfile />
        <div className="ml-3 flex items-end justify-start gap-3">
          <Image
            src="/notFound.jpg"
            width={80}
            height={80}
            alt="Imagem de Perfil Usuário"
            className="relative mt-[-70px] h-28 w-28 rounded-full border-4 border-second-background"
          />
          <div>
            <h2 className="mt-[-50px] text-center text-lg font-bold text-font-color">
              Bem Vindo,
              <span className="text-second-color-logo"> John Doe.</span>
            </h2>
          </div>
        </div>
        <form className="space-y-6" action={register}>
          <div className="space-y-6 rounded-md">
            <div className="space-y-1">
              <label
                htmlFor="cpf"
                className="text-sm font-semibold text-font-color"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                autoComplete="cpf"
                placeholder="Digite seu CPF"
                maxLength={11}
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 placeholder-gray-500 focus:z-10 focus:border-base-blue focus:outline-none focus:ring-base-blue sm:text-sm"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-font-color"
              >
                Endereço de Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="example@example.com"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 placeholder-gray-500 focus:z-10 focus:border-base-blue focus:outline-none focus:ring-base-blue sm:text-sm"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-font-color"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  type={openEye ? "password" : "text"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="********"
                  className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 placeholder-gray-500 focus:z-10 focus:border-base-blue focus:outline-none focus:ring-base-blue sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {openEye ? (
                    <FaRegEyeSlash
                      className="size-5 text-base-blue"
                      onClick={() => setOpenEye(false)}
                    />
                  ) : (
                    <FaRegEye
                      className="size-5 text-base-blue"
                      onClick={() => setOpenEye(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-1 flex items-center">
              <input
                type="checkbox"
                name="remember-mer"
                id="remember-me"
                className="h-4 w-4 rounded border-gray-300 text-ligt-font-color focus:ring-second-color-logo"
              />
              <label
                htmlFor="remember-me"
                className="text-light-font-color ml-2 block text-sm"
              >
                Mantenha Conectado
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-base-blue underline hover:text-second-color-logo"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>
          <div>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-base-blue px-4 py-2 text-sm font-medium text-second-color hover:bg-second-color-logo focus:outline-none focus:ring-2 focus:ring-second-color-logo focus:ring-offset-2">
              Registre-se
            </button>
          </div>
          <div>
            <p className="text-light-font-color block text-center text-sm">
              Você já possui uma conta?
              <a
                href="#"
                className="ml-1.5 text-center text-sm text-base-blue hover:text-second-color-logo"
              >
                Faça Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
