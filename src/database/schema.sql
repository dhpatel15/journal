DROP DATABASE IF EXISTS journals;

CREATE DATABASE journals;

USE journals;

CREATE TABLE user (
id INT(11) AUTO_INCREMENT NOT NULL,
user_name VARCHAR(50) UNIQUE,
PRIMARY KEY(`id`)
);

CREATE TABLE entries (
id INT(11) AUTO_INCREMENT NOT NULL,
journal_entry VARCHAR(8000),
user_id VARCHAR(20),
anger INT(11),
fear INT(11),
joy INT(11),
sadness INT(11),
analytical INT(11),
confident INT(11),
tentative INT(11),
date DATE,
PRIMARY KEY(`id`),
FOREIGN KEY (user_id) REFERENCES user(user_name)
);


