-- CreateTable
CREATE TABLE `pix_status_webhook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_id` INTEGER NOT NULL,
    `invoice_pix_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `transaction_id` INTEGER NOT NULL,
    `settlement_date` VARCHAR(191) NULL,
    `payer_id` VARCHAR(191) NULL,
    `payer_name` VARCHAR(191) NULL,
    `account_number` VARCHAR(191) NULL,
    `agency_number` VARCHAR(191) NULL,
    `bank_code` VARCHAR(191) NULL,
    `movement_identifier` VARCHAR(191) NOT NULL,
    `external_identifier` VARCHAR(191) NOT NULL,
    `tracking_code` VARCHAR(191) NULL,
    `amount` VARCHAR(191) NOT NULL,
    `instruction_text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
