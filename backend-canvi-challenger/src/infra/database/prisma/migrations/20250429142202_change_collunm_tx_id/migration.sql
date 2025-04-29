/*
  Warnings:

  - You are about to drop the column `transaction_id` on the `pix_generate` table. All the data in the column will be lost.
  - Added the required column `tx_id` to the `pix_generate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pix_generate` DROP COLUMN `transaction_id`,
    ADD COLUMN `tx_id` VARCHAR(191) NOT NULL;
