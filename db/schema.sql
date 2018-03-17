DROP DATABASE IF EXISTS traxx_db;
CREATE DATABASE traxx_db;

USE traxx_db;


CREATE TABLE employee 
(
  employee_id INT AUTO_INCREMENT NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (employee_id)
);


CREATE TABLE vendor
(
  vendor_id INT AUTO_INCREMENT NOT NULL,
  company_name VARCHAR(40) NOT NULL,
  contact_name VARCHAR(40),
  contact_phone VARCHAR(24),
  contact_email VARCHAR(50),
  website VARCHAR(50),
  PRIMARY KEY (vendor_id)
);


CREATE TABLE purchase_request
(
  request_id INT AUTO_INCREMENT NOT NULL,
  employee_id INT NOT NULL,
  vendor_id INT NOT NULL,
  request_date DATE NOT NULL,
  require_date DATE NOT NULL,
  completed_date DATE,
  tax_rate DECIMAL(5,2) NOT NULL,
  estimated_shipping DECIMAL(13,4) NOT NULL,
  request_total DECIMAL(13,4) NOT NULL,
  justification VARCHAR(255),
  status VARCHAR(25),
  PRIMARY KEY (request_id),
  FOREIGN KEY (employee_id) REFERENCES employee (employee_id),
  FOREIGN KEY (vendor_id) REFERENCES vendor (vendor_id)
);


CREATE TABLE item
(
  item_id INT AUTO_INCREMENT NOT NULL,
  request_id INT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  price DECIMAL(13,4) NOT NULL,
  PRIMARY KEY (item_id),
  FOREIGN KEY (request_id) REFERENCES purchase_request (request_id)
);
