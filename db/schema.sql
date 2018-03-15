ROP DATABASE IF EXISTS trax_db;
CREATE DATABASE trax_db;

USE trax_db;


CREATE TABLE trax_user 
(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  security_role VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);


CREATE TABLE vendor
(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  vendor_name VARCHAR(255) NOT NULL,
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  state VARCHAR(5) NOT NULL,
  zip VARCHAR(12) NOT NULL,
  phone VARCHAR(12) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  website VARCHAR(255)
);


CREATE TABLE purchase_request
(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_number VARCHAR(255) NOT NULL,
  order_number,
  tax_rate,
  estimated_shipping,
  request_total,
  date_needed,
  justification,
  comments,
  created_by,
  created_date,
  vendor,
  status,
  completed_date
);


CREATE TABLE item
(
request_number,
order_number,
item_name,
item_number,
quantity,
unit_of_measure,
price,
item_total
);
