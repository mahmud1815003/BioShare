const { check, validationResult } = require('express-validator');
const DoctorModel = require('../../Models/doctor');
const createError = require('http-errors');
const hospital = require('../../Models/hospital');

const doctorValidator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage("Please Enter Your Name")
        .trim()
    ,
    check('email')
        .isEmail()
        .withMessage("Enter a valid Email")
        .custom(async (value) => {
            try {
                const res = await DoctorModel.findOne({ email: value });
                if (res) {
                    throw createError("User Already Exists");
                }
            } catch (error) {
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
    ,
    check('posting')
        .custom(async (value) => {
            try {
                const hospitalData = await hospital.findOne({ name: value });
                if (!hospitalData) {
                    throw createError('Select a hospital');
                }
            } catch (error) {
                throw createError(error.message);
            }
        }),
];



const doctorValidatorResults = (req, res, next) => {
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
    doctorValidator,
    doctorValidatorResults,
}