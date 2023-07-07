/*
  Warnings:

  - You are about to drop the column `status` on the `skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `skill` DROP COLUMN `status`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;
