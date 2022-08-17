const { createHttpError } = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contact');

const contactUs = async (req, res, next) => {
    const data = req.body
    const contactDetails = await Contact.create(data);
    res.status(201).json({ status: 'success sent', data: contactDetails });
    
}

module.exports = {
    contactUs
}