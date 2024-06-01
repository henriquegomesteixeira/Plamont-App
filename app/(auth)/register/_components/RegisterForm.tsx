'use client';
import register from "../_actions/register";

export default function RegisterForm() {
  return (
    <div>
      <h1>Login Page</h1>
      <form action={register}>
        <input className="p-2 border-2 border-black rounded-md" name="cpf" type="text" placeholder="cpf" />
        <input className="p-2 border-2 border-black rounded-md" name="email" type="email" placeholder="email@exemplo.com" />
        <input className="p-2 border-2 border-black rounded-md" name="password" type="password" placeholder="*********" />
        <button className="bg-black text-white p-2.5 rounded-md" type="submit">Register</button>
      </form>
    </div>
  );
}
