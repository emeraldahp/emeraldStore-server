const express = require('express');
const { getAllProducts } = require('../controllers/products.controller');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, getAllProducts);


module.exports = router;