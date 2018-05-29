-- Create MySQL Database called `bamazon`
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

-- Create a Table called `products`
CREATE TABLE products
(
-- Products includes the following columns:

    -- item_id (unique id for each product)
    item_id INT NOT NULL AUTO_INCREMENT, 

    -- product_name (Name of product)
    product_name VARCHAR(100) NOT NULL,

    -- department_name
    department_name VARCHAR(100) NOT NULL,

    -- price (cost to customer)
    price DECIMAL(10,2) NOT NULL,

    -- stock_quantity (how much of the product is available in stores)
    stock_quantity INT(10) NOT NULL, 

    PRIMARY KEY(item_id)
);

-- Populate database with around 10 different products
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("P1", "D1", 1, 100),
        ("P2", "D2", 1.1, 100),
        ("P3", "D3", 1.2, 100),
        ("P4", "D4", 1.3, 100),
        ("P5", "D5", 1.4, 100),
        ("P6", "D6", 1.5, 100),
        ("P7", "D7", 1.6, 100),
        ("P8", "D8", 1.7, 100),
        ("P9", "D9", 1.8, 100),
        ("P10", "D10", 1.9, 100);

    SELECT * FROM bamazon.products;
