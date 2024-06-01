import logout from "./(auth)/(logout)/_actions/logout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login"); // Se o usuário não estiver autenticado, redireciona para a página de login
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>Home Page</h1>
      <form action={logout}>
        <button className="bg-black text-white p-2.5 rounded-md">
          Logout
        </button>
      </form>
    </div>
  );
}
