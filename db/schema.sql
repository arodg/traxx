DROP DATABASE IF EXISTS trax_db;
CREATE DATABASE trax_db;

USE trax_db;


CREATE TABLE trax_user 
(
  id INT AUTO_INCREMENT NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(25) NOT NULL,
  security_role VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE vendor
(
  id INT AUTO_INCREMENT NOT NULL,
  vendor_name VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  phone VARCHAR(12) NOT NULL,
  contact_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  website VARCHAR(50),
  PRIMARY KEY (id)
);


CREATE TABLE purchase_request
(
  id INT AUTO_INCREMENT NOT NULL,
  request_number SMALLINT(6) NOT NULL,
  tax_rate DECIMAL(5,2) NOT NULL,
  estimated_shipping DECIMAL(13,4) NOT NULL,
  request_total DECIMAL(13,4) NOT NULL,
  date_needed DATE NOT NULL,
  justification VARCHAR(255),
  comments VARCHAR(255),
  trax_user_id INT NOT NULL,
  created_date DATE NOT NULL,
  vendor_id INT NOT NULL,
  status VARCHAR(25),
  completed_date DATE NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE item
(
  id INT AUTO_INCREMENT NOT NULL,
  purchase_request_request_number SMALLINT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  serial_number INT NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  unit_of_measure VARCHAR(50) NOT NULL,
  price DECIMAL(13,4) NOT NULL,
  PRIMARY KEY (id)
);
