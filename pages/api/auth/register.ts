import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { cpf, email, password } = req.body;

  // Verifica se o usuário existe na tabela de referência
  const referenceUser = await prisma.referenceUser.findUnique({
    where: { cpf },
  });

  if (!email || !password || !cpf) {
    return res.status(400).json({ message: 'Email, CPF, and password are required' });
  }

  if (!referenceUser || referenceUser.cpf !== cpf || !referenceUser.active) {
    return res.status(401).json({ message: 'User not found or inactive in reference table' });
  }

  // AVISO: Estudar o bcrypt para entender como funciona
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        cpf,
        matricula: referenceUser.matricula,
        name: referenceUser.name,
        role: referenceUser.role,
        email,
        password: hashedPassword,
        active: referenceUser.active,
      },
    });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
}
