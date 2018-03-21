INSERT INTO Employee (last_name, first_name)
VALUES ("Usrey-Scott", "Jenny"), ("Joselevitz", "Batli"), ("Saenz", "Jason"), ("Rodgerson", "Anita");

INSERT INTO Pr (employee_id, approver_id, request_created, request_required, request_total, tax_rate, estimated_shipping, justification, comments, request_status)
VALUES ("1", "4", "2018-07-04", "2018-08-04", "30.63", "8.25", "25", "none", "none", "pending");

INSERT INTO Item (item_name)
VALUES ("computer"), ("chair");

INSERT INTO Detail (request_id, item_id, quantity, unit_price, extended_price, request_line_number)
VALUES ("2", "1", "3", "20", "60", "4");