DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_DB;

CREATE TABLE burgers
(
  id INT NOT NULL
  AUTO_INCREMENT,
  burger_name VARCHAR
  (30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY
  (id)
);