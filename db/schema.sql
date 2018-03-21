DROP DATABASE IF EXISTS traxx_db;
CREATE DATABASE traxx_db;

USE traxx_db;


CREATE TABLE Employee
(
  employee_id INT AUTO_INCREMENT NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (employee_id)
);

CREATE TABLE Pr
(
  request_id INT AUTO_INCREMENT NOT NULL,
  employee_id INT NOT NULL,
  approver_id INT NOT NULL,
  request_created DATE NOT NULL,
  request_required DATE NOT NULL,
  request_approved DATE,
  request_total DECIMAL(10,2) NOT NULL,
  tax_rate DECIMAL(5,2) NOT NULL,
  estimated_shipping DECIMAL(10,2) NOT NULL,
  justification VARCHAR(255),
  comments VARCHAR(255),
  request_status ENUM ("approved", "pending", "denied") NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  
  FOREIGN KEY (employee_id) REFERENCES Employee (employee_id),
  
  PRIMARY KEY (request_id)
);

CREATE TABLE Item
(
  item_id INT AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE Detail
(
  request_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  extended_price DECIMAL(10,2) NOT NULL,
  request_line_number INT NOT NULL,
  createdAt TIMESTAMP NOT NULL,

  FOREIGN KEY (request_id) REFERENCES Pr (request_id),
  FOREIGN KEY (item_id) REFERENCES Item (item_id),
  
  PRIMARY KEY (request_id, item_id)
);
