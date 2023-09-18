const express = require('express');
const api = express.Router()
const users = require('../../../routes/user');
const AddACategory  = require('../../../routes/category');
const createProducts  = require('../../../routes/products');
const  fetchProducts  = require('../../../routes/products');
// const books = require('../../routes/book')

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to My API'
}))

api.use("/users", users);
api.use("/cat", AddACategory)
api.use("/users", createProducts )
api.use("/all", fetchProducts) 
// api.use("/tasks", task);

module.exports = api