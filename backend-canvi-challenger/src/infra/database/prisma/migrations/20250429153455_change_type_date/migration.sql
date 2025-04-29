/*
  Warnings:

  - Made the column `effective_date` on table `DetailsListQueryPixDynamic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `settlement_date` on table `DetailsListQueryPixDynamic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `DetailsListQueryPixDynamic` MODIFY `effective_date` VARCHAR(191) NOT NULL,
    MODIFY `settlement_date` VARCHAR(191) NOT NULL;
