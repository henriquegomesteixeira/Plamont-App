import { auth } from '@/auth';
import RegisterForm from './_components/RegisterForm';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  // Permite que apenas usuários não autenticados acessem a página, uma das vantagens de usar next-auth
  const session = await auth();
  if (session) redirect('/');

  return <RegisterForm />;
}