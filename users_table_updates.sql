ALTER TABLE `DatabaseName`.`Users` 
ADD COLUMN `passwd` VARCHAR(255) NOT NULL AFTER `userName`;
