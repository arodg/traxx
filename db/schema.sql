ROP DATABASE IF EXISTS trax_db;
CREATE DATABASE trax_db;

USE trax_db;


CREATE TABLE trax_user 
(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(25) NOT NULL,
  security_role VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL
);


CREATE TABLE vendor
(
  id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  vendor_name VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  phone VARCHAR(12) NOT NULL,
  contact_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  website VARCHAR(50)
);


CREATE TABLE purchase_request
(
  id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
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
  completed_date DATE NOT NULL
);


CREATE TABLE item
(
  id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  purchase_request_request_number SMALLINT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  serial_number INT NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  unit_of_measure VARCHAR(50) NOT NULL,
  price DECIMAL(13,4) NOT NULL
);
