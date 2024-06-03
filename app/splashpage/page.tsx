import { auth } from "@/auth";
import SplashPage from "./_components/splashPage";
import { redirect } from "next/navigation";

export default async function splashPage() {
  // Permite que apenas usuários não autenticados acessem a página, uma das vantagens de usar next-auth
  const session = await auth();
  if (session) redirect("/");

  return <SplashPage />;
}
