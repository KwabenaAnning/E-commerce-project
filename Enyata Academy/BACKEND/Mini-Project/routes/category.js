const express = require('express');
const { AddACategory} = require ('../controllers/category.controllers');

const router = express.Router();

router.post('/', AddACategory);
module.exports = router