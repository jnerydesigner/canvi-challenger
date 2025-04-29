/*
  Warnings:

  - Added the required column `maturity` to the `pix_generate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pix_generate` ADD COLUMN `maturity` VARCHAR(191) NOT NULL;
