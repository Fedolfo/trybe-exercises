/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE
/*!32312 IF NOT EXISTS*/
cep_lookup
/*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE cep_lookup;
DROP TABLE IF EXISTS ceps;
CREATE TABLE `ceps` (
  `cep` varchar(8) NOT NULL,
  `logradouro` varchar(50) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `localidade` varchar(20) NOT NULL,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`cep`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;