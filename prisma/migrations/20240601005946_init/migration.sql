/*
  Warnings:

  - Added the required column `matricula` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `ReferenceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matricula` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReferenceUser" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "matricula" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "sector" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "acess_level" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "matricula" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profile_picture" TEXT,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "sector" TEXT NOT NULL;
