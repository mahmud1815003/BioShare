const { check, validationResult } = require('express-validator');
const StaffModel = require('../../Models/staff');
const createError = require('http-errors');

const staffValidator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage("Please Enter Your Name")
        .trim()
    ,
    check('email')
        .isEmail()
        .withMessage("Enter a valid Email")
        .custom(async (value) => {
            try{
                const res = await StaffModel.findOne({email: value});
                if(res){
                    throw createError("User Already Exists");
                }
            }catch(error){
                throw createError(error.message);
            }
        })
    ,
    check('mobile')
        .isMobilePhone('bn-BD', {
            strictMode: true,
        })
        .withMessage("Enter a Valid Bangladeshi Phone Number Ex: +880")
        .trim()
    ,
    check("password")
        .isLength({ min: 5 })
        .withMessage("Enter a password with atleast length of 5")
        .trim()
    ,
    check('education')
        .isLength({ min: 1 })
        .withMessage("Please Enter Doctor's Eductiona")
        .trim()
    ,
    check('designation')
        .isLength({ min: 1 })
        .withMessage("Please Enter Doctor's Designation")
        .trim()
    
];



const staffValidatorResults = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    console.log(mappedErrors);
    if (Object.keys(mappedErrors).length == 0) {
        next();
    } else {
        res.status(500).json(mappedErrors);
    }
}



module.exports = {
    staffValidator,
    staffValidatorResults,
}