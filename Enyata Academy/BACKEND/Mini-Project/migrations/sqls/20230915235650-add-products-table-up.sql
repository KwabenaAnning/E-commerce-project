/* Replace with your SQL commands */

create TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price DECIMAL(10,2),
    quantity_sold INT DEFAULT 0,
    quantiy INT NOT NULL,
    category_id INT references category(category_id)
)
