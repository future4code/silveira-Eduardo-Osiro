-- Active: 1656521719943@@35.226.146.116@3306@silveira-21814656-eduardo-osiro
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) DEFAULT "NORMAL"
)