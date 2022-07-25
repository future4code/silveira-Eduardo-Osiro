-- Active: 1656521719943@@35.226.146.116@3306@silveira-21814656-eduardo-osiro

CREATE TABLE wirecard_client (
    id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE wirecard_payment_creditcard (
    id VARCHAR(255) PRIMARY KEY,
    client_id VARCHAR(255) NOT NULL,
    buyer_name VARCHAR(255) NOT NULL,
    buyer_email VARCHAR(255) NOT NULL,
    buyer_cpf VARCHAR(255) NOT NULL,
    payment_amount INT NOT NULL,
    payment_type ENUM('CREDITCARD') NOT NULL,
    card_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(255) NOT NULL,
    card_expiration_date VARCHAR(255) NOT NULL,
    card_cvv VARCHAR(255) NOT NULL,
    status ENUM('PENDING', 'APPROVED', "DECLINED") DEFAULT "PENDING",
    FOREIGN KEY (client_id) REFERENCES wirecard_client(id)
);

CREATE TABLE wirecard_payment_slip (
    id VARCHAR(255) PRIMARY KEY,
    client_id VARCHAR(255) NOT NULL,
    buyer_name VARCHAR(255) NOT NULL,
    buyer_email VARCHAR(255) NOT NULL,
    buyer_cpf VARCHAR(255) NOT NULL,
    payment_amount INT NOT NULL,
    payment_type ENUM('SLIP') NOT NULL,
    status ENUM('PENDING', 'APPROVED', "RECUSADO") DEFAULT "PENDING",
    slip_number VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES wirecard_client(id)
);