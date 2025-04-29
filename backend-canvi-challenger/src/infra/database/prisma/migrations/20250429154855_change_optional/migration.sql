-- AlterTable
ALTER TABLE `DetailsListQueryPixDynamic` MODIFY `bank_name` VARCHAR(191) NULL,
    MODIFY `code` VARCHAR(191) NULL,
    MODIFY `agency` VARCHAR(191) NULL,
    MODIFY `receiver_id` VARCHAR(191) NULL,
    MODIFY `receiver_name` VARCHAR(191) NULL,
    MODIFY `allow_refunded_release` INTEGER NOT NULL DEFAULT 0;
