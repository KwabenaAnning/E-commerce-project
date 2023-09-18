const {addCategory, findcategorybyName} = require ('../queries/Category')
const {runQuery} = require ('../src/config/database.config')


const AddingCategory = async (body) => {
    const {name} =body
    const  categoryPresent = await runQuery(findcategorybyName, [name])
    if (categoryPresent.length > 0) {
        console.log(categoryPresent);
        throw {
         code: 402,
         message: 'category already exists....2',
         data: null,
        status: 'error' 
        };
    }

    const response = await runQuery (addCategory, [name])
    return{
        code: 200,
        status: 'success',
        message: 'New category added successfully',
        data: response
    }
}

module.exports = {
    AddingCategory
}