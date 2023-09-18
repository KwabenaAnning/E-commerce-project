/* Replace with your SQL commands */

ALTER TABLE category
DROP COLUMN name;  

ALTER TABLE category
ADD COLUMN name VARCHAR UNIQUE;

ALTER TABLE products
DROP COLUMN name;  

ALTER TABLE products
ADD COLUMN name VARCHAR UNIQUE;
