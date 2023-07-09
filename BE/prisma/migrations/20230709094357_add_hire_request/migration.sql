/*
  Warnings:

  - You are about to drop the column `mentor_id` on the `code_request` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `code_request` DROP FOREIGN KEY `code_request_mentor_id_fkey`;

-- AlterTable
ALTER TABLE `code_request` DROP COLUMN `mentor_id`;

-- CreateTable
CREATE TABLE `hire_request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_request_id` INTEGER NOT NULL,
    `mentor_id` INTEGER NOT NULL,
    `title` VARCHAR(250) NULL,
    `content` VARCHAR(250) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `hire_request` ADD CONSTRAINT `hire_request_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `mentor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
