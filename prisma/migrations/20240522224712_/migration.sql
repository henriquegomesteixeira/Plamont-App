/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `matricula` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReferenceUser" ADD COLUMN     "matricula" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "referenceUserName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "acess_level" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "referenceUserId" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_referenceUserId_fkey" FOREIGN KEY ("referenceUserId") REFERENCES "ReferenceUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
