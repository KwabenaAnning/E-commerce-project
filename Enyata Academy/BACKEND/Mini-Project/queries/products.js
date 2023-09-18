const createProducts = `
INSERT INTO products 
(name, 
 price, 
quantiy
) VALUES ($1, $2, $3) RETURNING product_id, name, price, quantiy`;

const findcategorybyProducts = `SELECT name, price, quantiy FROM products WHERE name = $1 `;

const fetchAllProducts=`
SELECT  name,price,quantity_sold,quantiy FROM products`;

const updateProduct =`
 UPDATE products 
 set 
`


module.exports = {
    createProducts,
    findcategorybyProducts,
    fetchAllProducts
}


// const findProductbyId = `
 
// `