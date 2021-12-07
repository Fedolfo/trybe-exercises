-- MySQL Script generated by MySQL Workbench
-- qua 27 out 2021 15:56:52
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema database(funcionarios)
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema database(funcionarios)
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `database(funcionarios)` ;
USE `database(funcionarios)` ;

-- -----------------------------------------------------
-- Table `database(funcionarios)`.`setores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database(funcionarios)`.`setores` (
  `id_setor` INT NOT NULL AUTO_INCREMENT,
  `nome_setor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_setor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `database(funcionarios)`.`funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database(funcionarios)`.`funcionarios` (
  `id_funcionario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `data_cadastro` VARCHAR(45) NOT NULL,
  `id_setor` INT NOT NULL,
  PRIMARY KEY (`id_funcionario`),
  INDEX `fk_funcionarios_1_idx` (`id_setor` ASC) VISIBLE,
  CONSTRAINT `fk_funcionarios_1`
    FOREIGN KEY (`id_setor`)
    REFERENCES `database(funcionarios)`.`setores` (`id_setor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `database(funcionarios)`.`contatos_funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database(funcionarios)`.`contatos_funcionarios` (
  `id_funcionario` INT NOT NULL AUTO_INCREMENT,
  `e-mail` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_funcionario`),
  CONSTRAINT `fk_contatos_funcionarios_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `database(funcionarios)`.`funcionarios` (`id_funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
