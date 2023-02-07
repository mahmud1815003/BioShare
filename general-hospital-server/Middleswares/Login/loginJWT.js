const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const getJWT = async (req,res,next) => {
    try{
        const loginObject = {
            name: res.locals.person.name,
            email: res.locals.person.email,
            role: req.body.role,
        }
        const token = jwt.sign(loginObject, process.env.jwt_secret, {
            expiresIn: 86400000,
        });
        res.status(200).json({
            user: loginObject,
            token: token,
        })
    }catch(error){
        res.status(500).json({
            message: 'Server Side Error',
        })
    }
}

module.exports = {
    getJWT,
}