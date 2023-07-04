-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountname` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `roleid` INTEGER NULL,
    `email` VARCHAR(250) NULL,

    INDEX `roleid`(`roleid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentorcoderequestid` INTEGER NULL,
    `content` VARCHAR(250) NULL,

    INDEX `mentorcoderequestid`(`mentorcoderequestid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coderequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(250) NULL,
    `content` VARCHAR(250) NULL,
    `deadline` DATE NULL,
    `menteeID` INTEGER NULL,

    INDEX `menteeID`(`menteeID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coderequestskill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coderequestid` INTEGER NULL,
    `skillid` INTEGER NULL,

    INDEX `coderequestid`(`coderequestid`),
    INDEX `skillid`(`skillid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feedback` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menteeid` INTEGER NULL,
    `star` INTEGER NULL,
    `comment` VARCHAR(250) NULL,

    INDEX `menteeid`(`menteeid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feedbackanswer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feedbackid` INTEGER NULL,
    `answerid` INTEGER NULL,

    INDEX `answerid`(`answerid`),
    INDEX `feedbackid`(`feedbackid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hirerelatitonship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menteeid` INTEGER NULL,
    `mentorid` INTEGER NULL,

    INDEX `menteeid`(`menteeid`),
    INDEX `mentorid`(`mentorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hirerequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menteeid` INTEGER NULL,
    `mentorid` INTEGER NULL,
    `title` VARCHAR(250) NULL,
    `content` VARCHAR(250) NULL,
    `statusid` INTEGER NULL,

    INDEX `menteeid`(`menteeid`),
    INDEX `mentorid`(`mentorid`),
    INDEX `statusid`(`statusid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historyhirerelationship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menteeid` INTEGER NULL,
    `mentorid` INTEGER NULL,
    `closedate` DATE NULL,

    INDEX `menteeid`(`menteeid`),
    INDEX `mentorid`(`mentorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountid` INTEGER NULL,
    `image` VARCHAR(250) NULL,

    INDEX `accountid`(`accountid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobname` VARCHAR(250) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountid` INTEGER NULL,
    `name` VARCHAR(250) NOT NULL,
    `address` VARCHAR(250) NULL,
    `phone` VARCHAR(250) NULL,
    `birthday` DATE NULL,
    `sex` VARCHAR(250) NULL,
    `avatar` VARCHAR(250) NULL,
    `introduce` VARCHAR(250) NULL,

    INDEX `accountid`(`accountid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountid` INTEGER NULL,
    `name` VARCHAR(250) NULL,
    `address` VARCHAR(250) NULL,
    `phone` VARCHAR(250) NULL,
    `birthday` DATE NULL,
    `sex` VARCHAR(250) NULL,
    `introduce` VARCHAR(250) NULL,
    `achievement` VARCHAR(250) NULL,
    `avatar` VARCHAR(250) NULL,
    `costHire` FLOAT NOT NULL,

    INDEX `accountid`(`accountid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentorcoderequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coderequestid` INTEGER NULL,
    `mentorid` INTEGER NULL,

    INDEX `coderequestid`(`coderequestid`),
    INDEX `mentorid`(`mentorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentorcoderequeststatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentorcoderequestid` INTEGER NULL,
    `statusid` INTEGER NULL,

    INDEX `mentorcoderequestid`(`mentorcoderequestid`),
    INDEX `statusid`(`statusid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentorjob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentorid` INTEGER NULL,
    `jobid` INTEGER NULL,

    INDEX `jobid`(`jobid`),
    INDEX `mentorid`(`mentorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentorskill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentorid` INTEGER NULL,
    `skillid` INTEGER NULL,

    INDEX `mentorid`(`mentorid`),
    INDEX `skillid`(`skillid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Status` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
