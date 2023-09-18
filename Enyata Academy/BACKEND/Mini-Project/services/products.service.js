const {findcategorybyProducts,createProducts,fetchAllProducts} = require('../queries/products')
const {runQuery} = require ('../src/config/database.config')


const CreateAProducts = async (body) => {
    const { name, price, quantiy } = body;
    const  productPresent = await runQuery(findcategorybyProducts, [name])
    if (productPresent.length > 0) {
        console.log(productPresent);
        throw {
         code: 402,
         message: 'product already exists....2',
         data: null,
        status: 'error' 
        };
    }

    const productResponse = await runQuery(createProducts, [name, price, quantiy]);
    return {
        code: 200,
        status: 'success',
        message: 'product created successfully!',
        data: productResponse
    }
  };

  const getAllProducts= async ()=>{
    const fetch= await runQuery(fetchAllProducts)
    return{
        code: 202,
        status: 'success',
        message: 'All products fetched successfully',
        data:fetch
    }
}


  module.exports = {
    CreateAProducts,
    getAllProducts
  }