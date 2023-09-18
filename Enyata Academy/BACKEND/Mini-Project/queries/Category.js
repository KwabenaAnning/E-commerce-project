const findcategorybyName = `SELECT category_id, name FROM category WHERE name = $1 `;

const addCategory = `
INSERT INTO category(
    name
    ) VALUES ($1) RETURNING category_id, name  
`;




module.exports ={
    addCategory,
    findcategorybyName
}