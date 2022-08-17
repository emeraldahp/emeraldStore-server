const express = require('express');
const { contactUs } = require('../controllers/contacts.controller');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/',authenticate, contactUs);


module.exports = router;