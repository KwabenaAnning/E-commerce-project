const UserService= require ('../services/user.service');

/**
 * Controller creating a new user
 * @param {request} req 
 * @param {response} res 
 * @param {object} next 
 * @returns JSON object as response data
 */

const createUSER = async (req, res, next) => {
    try {
        const response = await UserService.createUser(req.body);
        return res.status(response.code).json(response)
    } catch (error) {
        next(error)
    }
}

/**
 * Controller for login user
  @param {request} req 
  @param {result} res 
  @param {} next 
 * @returns 
 */

  const signInUser = async (req, res, next) => {
    try {
        const result = await UserService.loginUser(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUSER,
    signInUser
}