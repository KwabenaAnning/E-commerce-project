const {AddingCategory} = require('../services/category.service');


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {object} next 
 * @returns  {JSON | error}
 */
const AddACategory = async (req, res, next) => {
    try{
      const response = await AddingCategory(req.body);
      return res.status(response.code).json(response);
    }catch (error) {
      return next(error);
    }
};

module.exports = {
    AddACategory
}