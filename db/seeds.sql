INSERT INTO employee (last_name, first_name)
VALUES ("Usrey-Scott", "Jenny"), ("Joselevitz", "Batli"), ("Saenz", "Jason"), ("Rodgerson", "Anita");

INSERT INTO pr (approver_id, request_created, request_required, request_total, tax_rate, estimated_shipping, justification, comments, request_status)
VALUES ("4", "2018-07-04", "2018-08-04", "30.63", "8.25", "25", "none", "none", "pending");

INSERT INTO item (item_name)
VALUES ("computer"), ("chair");

INSERT INTO detail (quantity, unit_price, extended_price, request_line_number)
VALUES ("3", "20", "60", "4");