# create burger_db
CREATE DATABASE burgers_db;

# use burgers_db
USE burgers_db;

#create Table burgers
CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured boolean NOT NUll,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);
# Select from everything 
Select * FROM burgers;
