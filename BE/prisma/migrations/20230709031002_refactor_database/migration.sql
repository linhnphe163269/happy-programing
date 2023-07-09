-- DropForeignKey
ALTER TABLE `code_request` DROP FOREIGN KEY `code_request_mentee_id_fkey`;

-- DropForeignKey
ALTER TABLE `code_request` DROP FOREIGN KEY `code_request_mentor_id_fkey`;

-- DropForeignKey
ALTER TABLE `mentor_skill` DROP FOREIGN KEY `mentor_skill_mentor_id_fkey`;

-- CreateTable
CREATE TABLE `mentee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `mentee_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `achievement` VARCHAR(250) NULL,
    `cost_hire` FLOAT NOT NULL,

    UNIQUE INDEX `mentor_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `code_request` ADD CONSTRAINT `code_request_mentee_id_fkey` FOREIGN KEY (`mentee_id`) REFERENCES `mentee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_request` ADD CONSTRAINT `code_request_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `mentor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentee` ADD CONSTRAINT `mentee_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentor` ADD CONSTRAINT `mentor_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentor_skill` ADD CONSTRAINT `mentor_skill_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `mentor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
