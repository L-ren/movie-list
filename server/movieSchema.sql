CREATE DATABASE movieDb;

USE movieDb;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64),
  watched INT,
  PRIMARY KEY(id)
);

/* advanced (from imdb??)
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64),
  year YEAR,
  runtime INT,
  metascore INT,
  imdbRating INT,
  watched INT,
  PRIMARY KEY(id)
);
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/