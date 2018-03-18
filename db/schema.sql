DROP DATABASE IF EXISTS traxx_db;
CREATE DATABASE traxx_db;

USE traxx_db;


CREATE TABLE employees 
(
  employee_id INT AUTO_INCREMENT NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (employee_id)
);


CREATE TABLE purchase_requests
(
  request_id INT AUTO_INCREMENT NOT NULL,
  employee_id INT NOT NULL,
  approver_id INT NOT NULL,
  request_created DATE NOT NULL,
  request_required DATE NOT NULL,
  request_approved DATE,
  request_total DECIMAL(13,4) NOT NULL,
  tax_rate DECIMAL(5,2) NOT NULL,
  estimated_shipping DECIMAL(13,4) NOT NULL,
  justification VARCHAR(255),
  request_status VARCHAR(5), NOT NULL,
  PRIMARY KEY (request_id),
  FOREIGN KEY (employee_id) REFERENCES employees (employee_id),
  FOREIGN KEY (approver_id) REFERENCES employees (employee_id),
  FOREIGN KEY (request_status) REFERENCES pr_status (request_status)
);

CREATE TABLE pr_status
(
  request_status INT,
  status_description VARCHAR
);

CREATE TABLE items_in_pr
(
  item_id INT NOT NULL,
  request_id INT NOT NULL,
  quantity
);

CREATE TABLE items
(
  item_id INT AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  extended_price DECIMAL(13,4) NOT NULL,
  unit_price DECIMAL(13,4) NOT NULL,
  PRIMARY KEY (item_id),
);
