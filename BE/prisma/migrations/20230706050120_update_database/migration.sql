/*
  Warnings:

  - You are about to drop the column `accountid` on the `image` table. All the data in the column will be lost.
  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coderequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coderequestskill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `feedbackanswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hirerelatitonship` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hirerequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyhirerelationship` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorcoderequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorcoderequeststatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorjob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorskill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `skill` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `skill` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `accountid` ON `image`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `accountid`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `skill` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL,
    MODIFY `name` VARCHAR(250) NOT NULL;

-- DropTable
DROP TABLE `account`;

-- DropTable
DROP TABLE `answer`;

-- DropTable
DROP TABLE `coderequest`;

-- DropTable
DROP TABLE `coderequestskill`;

-- DropTable
DROP TABLE `feedback`;

-- DropTable
DROP TABLE `feedbackanswer`;

-- DropTable
DROP TABLE `hirerelatitonship`;

-- DropTable
DROP TABLE `hirerequest`;

-- DropTable
DROP TABLE `historyhirerelationship`;

-- DropTable
DROP TABLE `job`;

-- DropTable
DROP TABLE `mentee`;

-- DropTable
DROP TABLE `mentor`;

-- DropTable
DROP TABLE `mentorcoderequest`;

-- DropTable
DROP TABLE `mentorcoderequeststatus`;

-- DropTable
DROP TABLE `mentorjob`;

-- DropTable
DROP TABLE `mentorskill`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `status`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `email` VARCHAR(250) NULL,
    `name` VARCHAR(250) NULL,
    `address` VARCHAR(250) NULL,
    `phone` VARCHAR(250) NULL,
    `birthday` DATE NULL,
    `sex` VARCHAR(250) NULL,
    `introduce` VARCHAR(250) NULL,
    `avatar` VARCHAR(250) NULL,
    `role` ENUM('ADMIN', 'MENTEE', 'MENTOR') NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `code_request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(250) NULL,
    `content` VARCHAR(250) NULL,
    `deadline` DATE NULL,
    `mentee_id` INTEGER NOT NULL,
    `mentor_id` INTEGER NOT NULL,
    `status` ENUM('OPEN', 'PROCESSING', 'CANCEL', 'CLOSED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `code_request_skill` (
    `code_request_id` INTEGER NOT NULL,
    `skill_id` INTEGER NOT NULL,

    PRIMARY KEY (`code_request_id`, `skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentor_skill` (
    `mentor_id` INTEGER NOT NULL,
    `skill_id` INTEGER NOT NULL,

    PRIMARY KEY (`mentor_id`, `skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `skill_name_key` ON `skill`(`name`);

-- AddForeignKey
ALTER TABLE `code_request` ADD CONSTRAINT `code_request_mentee_id_fkey` FOREIGN KEY (`mentee_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_request` ADD CONSTRAINT `code_request_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_request_skill` ADD CONSTRAINT `code_request_skill_code_request_id_fkey` FOREIGN KEY (`code_request_id`) REFERENCES `code_request`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_request_skill` ADD CONSTRAINT `code_request_skill_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `image_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentor_skill` ADD CONSTRAINT `mentor_skill_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentor_skill` ADD CONSTRAINT `mentor_skill_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
