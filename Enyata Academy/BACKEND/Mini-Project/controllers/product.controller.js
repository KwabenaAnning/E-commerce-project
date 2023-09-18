const productService = require ('../services/products.service');

const createProducts = async (req,res,next) => {
   try {
    const result = await productService.CreateAProducts(req.body);
      return res.status(result.code).json(result);
   } catch (error) {
    return next(error);  
   }

}

const fetchProducts = async (req, res, next) => {
    try {
        const result = await productService.getAllProducts();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createProducts,
    fetchProducts
}
