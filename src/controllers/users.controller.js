const { createHttpError } = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const User = require('../models/User');



const register = async (req, res, next) => {
    const data= req.body
    const insertedUser = await User.create(data);
    console.log(insertedUser)
    if (!insertedUser) {
        const error = createHttpError('Bad Credentials', 400);
        throw error;
    }


    res.status(201).json({ status: 'success', data: insertedUser });

    
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    if (user === null) {
        const error = createHttpError('Bad Credentials', 400);
        throw error;
    }

    return user;
};

const checkPassword = async (user, plainTextPassword) => {
    let isMatch;
    isMatch = await user.checkPassword(plainTextPassword);
    if (!isMatch) {
        const error = createHttpError('Bad Credentials Pass', 400);
        throw error;
    }
    return isMatch;
};

const login = async (req, res, next) => {
    const credentials = req.body;
    if (!(credentials?.email && credentials?.password)) {
        const httpError = createHttpError('Bad request', 400);
        next(httpError);
        return;
    }
    const { email, password } = credentials;

    const user = await getUserByEmail(email);

    await checkPassword(user, password);
    const claims = {
        id: user._id,
        name: user.name,
        email: user.email,
    };
    jwt.sign(claims, process.env.JWT_SECRET, function (error, token) {
        // some problem in generating JWT
        if (error) {
            const httpError = createHttpError('Internal Server Error', 500);
            next(httpError);
        }

        res.status(201).json({
            status: 'success',
            data: {
                name: user.name,
                email: user.email, // useful for frontend app
                // token: token
                token,
            },
        });
    });
};


module.exports = {
    register, login
}
