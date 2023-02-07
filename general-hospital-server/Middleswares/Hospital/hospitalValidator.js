const {check, validationResult} = require('express-validator');
const Hospital = require('../../Models/hospital');
const createError = require('http-errors');

const hospitalValidator = [
    check('name')
        .isLength({min: 1})
        .withMessage("Please Enter The Hospital Name")
        .trim()
    ,
    check('email')
        .isEmail()
        .withMessage("Enter a Valid Email")
        .trim()
        .custom(async (value) => {
            try{
                const res = await Hospital.findOne({email: value});
                if(res){
                    throw createError("User Already Exists");
                }
            }catch(error){
                throw createError(error.message);
            }
        })
    ,
    check('mobile')
        .isMobilePhone('bn-BD',{
            strictMode: true,
        })
        .withMessage("Enter a Valid Bangladeshi Phone Number Ex: +880")
        .trim()
    ,
    check("address")
        .isLength({min: 1})
        .withMessage("Enter the Address")
        .trim()
    ,
    check("password")
        .isLength({min: 5})
        .withMessage("Enter a password with atleast length of 5")
        .trim()
];

const hospitalValidatorResults = (req,res,next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    //console.log(mappedErrors);
    if(Object.keys(mappedErrors).length == 0){
        next();
    }else{
        res.status(500).json(mappedErrors);
    }
} 

module.exports = {
    hospitalValidator,
    hospitalValidatorResults,
}