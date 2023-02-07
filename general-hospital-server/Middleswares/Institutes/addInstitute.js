const {check, validationResult} = require('express-validator');
const Institue = require('../../Models/institute');
const createError = require('http-errors');

const addInstituteValidator = [
    check('name')
        .isLength({min: 1})
        .withMessage("Please Enter The Institute Name")
        .trim()
    ,
    check('email')
        .isEmail()
        .withMessage("Enter a Valid Email")
        .trim()
        .custom(async (value) => {
            try{
                const res = await Institue.findOne({email: value});
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
    ,
    check('shortName')
        .isLength({min: 1})
        .withMessage("Enter Your Institute\'s Short Form")
    ,
    check('domains')
        .isLength({min: 1})
        .withMessage("Enter a domain atleast")
    ,
    check("address")
        .isLength({min: 1})
        .withMessage("Enter the Address")
    
];

const addInstituteValidatorResults = (req,res,next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    console.log(mappedErrors);
    if(Object.keys(mappedErrors).length == 0){
        next();
    }else{
        res.status(500).json(mappedErrors);
    }
} 

module.exports = {
    addInstituteValidator,
    addInstituteValidatorResults,
}