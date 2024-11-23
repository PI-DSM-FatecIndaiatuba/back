/*
  Warnings:

  - Made the column `preferencia` on table `UsuarioInteresse` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UsuarioInteresse" ALTER COLUMN "preferencia" SET NOT NULL;
