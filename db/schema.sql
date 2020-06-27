DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE books
(
  id INT NOT NULL
  AUTO_INCREMENT,
  book_name VARCHAR
  (100) NOT NULL,
  wasRead BOOLEAN DEFAULT false,
  PRIMARY KEY
  (id)
);