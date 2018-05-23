CREATE database products_db;

USE products_db;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(20) NULL,
    department_name VARCHAR(20) NULL,
    price DECIMAL(10,2) NULL, 
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
)

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12345, 'Slippers', 'Home Goods', 10.99, 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (54321, 'TV', 'Electronics', 1000, 4);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (24958, 'iPhone Case', 'Mobile Accessories', 5.99, 14);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (09874, 'Air Filter', 'Home Goods', 27.49, 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (56943, 'Lamp', 'Home Goods', 14.99, 2);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (77586, 'Oil Filters', 'Automotive', 34.99, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (98943, 'Headphones', 'Electronics', 100.99, 6);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (13412, 'Bed Sheets', 'Home Goods', 13.99, 6);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (98975, 'Guitar Picks', 'Music', 4.99, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (90801, 'Nails', 'Home Improvment', 1.99, 10);
