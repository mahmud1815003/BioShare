const jwt = require('jsonwebtoken');

const doctorRoleValidator = (req,res,next) => {
    const token = req?.headers?.authorization;
    if(!token){
        res.status(500).json({
            message: "Authentication Failed",
        })
    }
    const decoded = jwt.verify(token, process.env.jwt_secret);
    if(decoded && (decoded.role == 'doctor')){
        res.locals.user = decoded;
        next();
    }else{
        res.status(500).json({
            message: "Authentication Failed",
        })
    }
}

module.exports = {
    doctorRoleValidator,
}