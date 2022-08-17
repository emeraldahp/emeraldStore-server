const { createHttpError } = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');



const getAllProducts = async (req, res, next) => {

    const products= await Product.find({})
    res.status(201).json({ status: 'success received', data:products });
    
}

module.exports = {
    getAllProducts
}