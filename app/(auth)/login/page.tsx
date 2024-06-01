import { auth } from '@/auth';
import LoginForm from './_components/LoginForm';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // Permite que apenas usuários não autenticados acessem a página, uma das vantagens de usar next-auth
  const session = await auth();
  if (session) redirect('/');

  return <LoginForm />;
}
