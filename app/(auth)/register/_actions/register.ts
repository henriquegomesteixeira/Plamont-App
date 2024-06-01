'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function register(formData: FormData) {

  const cpf = formData.get('cpf') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Verifique se algum campo está vazio
  if (!cpf || !email || !password) {
    throw new Error('Preencha todos os campos');
  }

  // Verifique se o usuário já existe
  const user  = await db.user.findUnique({
    where: { cpf },
  }) as any; // Corrigir

  if (user) {
    throw new Error('Usuário já existe');
  }

  const referenceUser = await db.referenceUser.findUnique({
    where: { cpf },
  }) as any; // Corrigir

  if (referenceUser.cpf !== cpf || !referenceUser || !referenceUser.active) {
    throw new Error('Cpf não encontrado');
  }

  if (referenceUser.cpf.length !== 11) {
    throw new Error('Email inválido');
  }

  await db.user.create({
    data: {
      cpf: referenceUser.cpf,
      matricula: referenceUser.matricula,
      name: referenceUser.name,
      role: referenceUser.role,
      email,
      password: hashSync(password, 10),
      sector: referenceUser.sector,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  redirect('/');
}