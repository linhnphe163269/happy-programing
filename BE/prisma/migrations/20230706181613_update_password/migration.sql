-- AlterTable
ALTER TABLE `code_request` MODIFY `status` ENUM('OPEN', 'PROCESSING', 'CANCEL', 'CLOSED') NOT NULL DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(250) NOT NULL;
