const jwt = require('jsonwebtoken');

const hospitalRoleValidator = (req,res,next) => {
    const token = req?.headers?.authorization;
    if(!token){
        res.status(500).json({
            message: "Authentication Failed",
        })
    }
    const decoded = jwt.verify(token, process.env.jwt_secret);
    if(decoded && (decoded.role == 'hospitaladmin')){
        res.locals.user = decoded;
        next();
    }else{
        res.status(500).json({
            message: "Authentication Failed",
        })
    }
}

module.exports = {
    hospitalRoleValidator,
}