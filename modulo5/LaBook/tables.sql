-- Active: 1656521719943@@35.226.146.116@3306@silveira-21814656-eduardo-osiro
CREATE TABLE IF NOT EXISTS labook_usuarios(
    id VARCHAR(255) PRIMARY KEY ,
    name VARCHAR(255) NOT NULL ,
    email VARCHAR(255) UNIQUE NOT NULL ,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS  labook_posts(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    photo VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date DATE NOT NULL,
    type ENUM ("normal", "evento") DEFAULT "normal",
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES `labook_usuarios` (id)
);