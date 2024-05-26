/*
  Warnings:

  - You are about to drop the column `active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ReferenceUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_cpf_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "active",
DROP COLUMN "cpf",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "role",
DROP COLUMN "sector",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "ReferenceUser";
