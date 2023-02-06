const notFound = (req, res) => {
    res.status(404).send('Server Running from railway.app, Looking for API requests');
};

module.exports = notFound;
