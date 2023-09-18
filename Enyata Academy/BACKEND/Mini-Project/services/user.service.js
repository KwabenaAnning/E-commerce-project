const {addUser, findUserByEmail} =require('../queries/user');
const {runQuery} = require('../src/config/database.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../src/config/env/index')

const createUser = async (body) => {
    const {username, email, password} =body
    const userPresent = await runQuery(findUserByEmail, [email])

    if(userPresent.length > 0){
        throw{
            code: 402,
            message: 'User already exists...1',
            data: null,
            status: 'error'
        }
    }

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password,saltRounds);
    const response = await runQuery(addUser, [username, email, hash]);

    return{
        code: 202,
        status: 'success',
        message: 'New user added successfully',
        data: response[0] 
    }
}

const loginUser = async (body) => {
    const { email, password } = body;

    // Check if that user exists inside the db
    const user = await runQuery(findUserByEmail, [email]);
    if (user.length === 0) {
        throw {
            code: 404,
            status: 'error',
            message: 'User not found',
            data: null
        }
    }
    // Compare user passwords
    const { password: dbPassword, id } = user[0];
    console.log(user[0])
    const userPassword = bcrypt.compareSync(password, dbPassword); // Boolean true/false
    if (!userPassword) {
        throw {
            code: 400,
            status: 'error',
            message: 'Wrong username and password combination',
            data: null
        }
    }

    const options = {
        'expiresIn': '1d'
    }

    // Generate token for authentication purposes
    const token = jwt.sign({
        id,
        email},
         config.JWT_SECRET_KEY, options);
    return {
        status: 'success',
        message: 'User login successfully',
        code: 200,
        data: {
            id,
           email,
        token
        }
    }
}

module.exports = {
    createUser,
    loginUser
}