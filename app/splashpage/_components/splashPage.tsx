"use client";
import Image from "next/image";

export default function RegisterForm() {
  return (
    <div className="flex h-screen flex-col bg-base-blue p-4">
      <div className="flex h-screen flex-col justify-center bg-base-blue">
        <div>
          <Image
            src="/logo.png"
            width={390}
            height={67}
            alt="Logo Plamont 25 Anos"
            className="mx-auto -mb-4"
          />
        </div>
      </div>
      <div>
        <p className="mb-[32px] text-center text-xs text-white">
          O que motiva a PLAMONT é poder permitir que o colaborador possa
          planejar uma vida melhor para ele e sua família.
        </p>
      </div>
      <div className="mb-3">
        <Image
          src="/splashart.png"
          width={600}
          height={300}
          alt="SplashArt Plamont"
          className="mx-auto -mb-4"
        />
      </div>
    </div>
  );
}
