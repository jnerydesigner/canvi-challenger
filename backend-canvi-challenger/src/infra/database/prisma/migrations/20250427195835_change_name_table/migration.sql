/*
  Warnings:

  - You are about to drop the `PixGenerate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `PixGenerate`;

-- CreateTable
CREATE TABLE `pix_generate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
