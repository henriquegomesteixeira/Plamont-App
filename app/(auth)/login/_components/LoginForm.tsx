"use client";

import register from "../_actions/login";

export default function RegisterForm() {
  return (
    <div>
      <h1>Login Page</h1>
      <form action={register}>
        <input
          className="rounded-md border-2 border-black p-2"
          name="email"
          type="email"
          placeholder="email@exemplo.com"
        />
        <input
          className="rounded-md border-2 border-black p-2"
          name="password"
          type="password"
          placeholder="*********"
        />
        <button className="rounded-md bg-black p-2.5 text-white" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
