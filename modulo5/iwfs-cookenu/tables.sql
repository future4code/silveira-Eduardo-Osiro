CREATE TABLE table_Cookenu(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ("NORMAL","ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE table_Cookenu_Recipes (
  id varchar(255) PRIMARY KEY,
  title varchar(255) UNIQUE NOT NULL,
  description text NOT NULL,
  created_at DATE NOT NULL
);
