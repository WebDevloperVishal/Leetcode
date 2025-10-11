/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "public"."UserRole" NOT NULL DEFAULT 'USER',
ADD COLUMN     "update" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
