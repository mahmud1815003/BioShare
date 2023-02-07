const patientModel = require('../../Models/patient');
const doctorModel = require('../../Models/doctor');
const hospitalModel = require('../../Models/hospital');
const researcherModel = require('../../Models/researcher');
const staffModel = require('../../Models/staff');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
const adminModel = require("../../Models/admin");

const loginValidator = [
    check('email')
        .isEmail()
        .withMessage("Enter a Valid Email")
        .trim()
    ,
    check("password")
        .isLength({ min: 5 })
        .withMessage("Enter a password with atleast length of 5")
        .trim()
];

const loginValidatorResults = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    console.log(mappedErrors);
    if (Object.keys(mappedErrors).length == 0) {
        next();
    } else {
        res.status(500).json(mappedErrors);
    }
}

const credentialValidator = async (req, res, next) => {
    try{
        let auth = undefined;
        if (req.body.role == 'patient') {
            auth = await patientModel.findOne({ email: req.body.email });
        } else if (req.body.role == 'doctor') {
            auth = await doctorModel.findOne({ email: req.body.email });
        } else if (req.body.role == 'hospitaladmin') {
            auth = await hospitalModel.findOne({ email: req.body.email });
        } else if (req.body.role == 'researcher') {
            auth = await researcherModel.findOne({ email: req.body.email });
        } else if (req.body.role == 'staff') {
            auth = await staffModel.findOne({ email: req.body.email });
        }else if (req.body.role == 'admin') {
            auth = await adminModel.findOne({ email: req.body.email });
        }
        console.log(auth);
        if (auth && auth?._id) {
            const isValidPassword = bcrypt.compare(req.body.password, auth.password);
            if(isValidPassword){
                res.locals.person = auth;
                next();
            }else{
                res.status(500).json({
                    message: 'Not Valid Credentials',
                })
            }
        } else {
            res.status(500).json({
                message: 'Not Valid Credentials',
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server Side Error',
        })
    }
}


module.exports = {
    loginValidator,
    loginValidatorResults,
    credentialValidator
}