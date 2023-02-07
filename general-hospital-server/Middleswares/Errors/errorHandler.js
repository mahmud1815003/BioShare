const createError = require('http-errors');


const errorHandler = (req,res,next,error) => {
    throw createError(error.message);
}

module.exports = {
    errorHandler,
}