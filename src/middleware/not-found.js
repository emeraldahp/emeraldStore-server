const notFound = (req, res) => {
    res.status(404).send('Server Running from Heroku, Looking for API requests');
};

module.exports = notFound;
