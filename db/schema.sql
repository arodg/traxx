DROP DATABASE IF EXISTS trax_db;
CREATE DATABASE trax_db;

USE trax_db;


CREATE TABLE Employee
(
  employee_id INT AUTO_INCREMENT NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id)
);

CREATE TABLE Pr
(
  request_id INT AUTO_INCREMENT NOT NULL,
  request_created DATE,
  request_required DATE,
  request_approved DATE,
  tax_rate DECIMAL(5,2),
  est_shipping DECIMAL(10,2),
  request_total DECIMAL(10,2),
  justification VARCHAR(255),
  comments VARCHAR(255),
  request_status ENUM ("approved", "pending", "denied"),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (request_id)
);


CREATE TABLE Item
(
  request_id INT(3) NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  extended_price DECIMAL(10,2) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
