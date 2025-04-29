-- CreateTable
CREATE TABLE `DetailsListQueryPixDynamic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acronym` VARCHAR(191) NOT NULL,
    `service_name` VARCHAR(191) NOT NULL,
    `transaction_id` INTEGER NOT NULL,
    `gross_amount` VARCHAR(191) NOT NULL,
    `fee_amount` VARCHAR(191) NOT NULL,
    `creation_date` DATETIME(3) NOT NULL,
    `effective_date` DATETIME(3) NULL,
    `settlement_date` DATETIME(3) NULL,
    `status_name` VARCHAR(191) NOT NULL,
    `payer_id` VARCHAR(191) NULL,
    `payer_name` VARCHAR(191) NULL,
    `tracking_code` VARCHAR(191) NULL,
    `instruction_text` VARCHAR(191) NOT NULL,
    `external_identifier` VARCHAR(191) NOT NULL,
    `balance_sum` VARCHAR(191) NOT NULL,
    `company_id` INTEGER NOT NULL,
    `description_text` VARCHAR(191) NOT NULL,
    `bank_name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `agency` VARCHAR(191) NOT NULL,
    `receiver_id` VARCHAR(191) NOT NULL,
    `receiver_name` VARCHAR(191) NOT NULL,
    `allow_refunded_release` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
