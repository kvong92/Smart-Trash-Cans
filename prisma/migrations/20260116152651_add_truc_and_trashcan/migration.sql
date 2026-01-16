-- CreateTable
CREATE TABLE `Transcans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pos_x` DOUBLE NOT NULL,
    `pos_y` DOUBLE NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Truck` (
    `id` INTEGER NOT NULL,
    `should_move` BOOLEAN NOT NULL,
    `last_trigger` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
