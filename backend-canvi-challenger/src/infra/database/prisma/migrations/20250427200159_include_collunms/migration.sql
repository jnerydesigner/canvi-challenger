/*
  Warnings:

  - Added the required column `amount` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `br_code` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collector_id` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collector_name` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `due_date` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pix_invoice_id` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qr_code` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `pix_generate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_id` to the `pix_generate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pix_generate` ADD COLUMN `amount` VARCHAR(191) NOT NULL,
    ADD COLUMN `br_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `collector_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `collector_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `due_date` DATETIME(3) NOT NULL,
    ADD COLUMN `pix_invoice_id` INTEGER NOT NULL,
    ADD COLUMN `qr_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `transaction_id` VARCHAR(191) NOT NULL;
