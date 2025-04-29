/*
  Warnings:

  - Added the required column `external_identification` to the `pix_generate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pix_generate` ADD COLUMN `external_identification` VARCHAR(191) NOT NULL;
