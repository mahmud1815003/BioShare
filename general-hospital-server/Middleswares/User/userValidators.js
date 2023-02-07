const { check, validationResult } = require('express-validator');
const PatientModel = require('../../Models/patient');
const ResearcherModel = require('../../Models/researcher');
const InstitueModel = require('../../Models/institute');
const createError = require('http-errors');
const { stringSpliter } = require('../../utilites/stringSpliters');

const patientValidator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage("Please Enter Your Name")
        .trim()
    ,
    check('email')
        .isEmail()
        .withMessage("Enter a valid Email")
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
];

const emailValidator = async (req, res, next) => {
    try {
        console.log(req.body);
        const patient = await PatientModel.findOne({ email: req.body.email });
        const reseacher = await ResearcherModel.findOne({ email: req.body.email });
        if ((reseacher && req.body.role === 'researcher') || ((patient && req.body.role === 'patient'))) {
            res.status(500).json({
                email: {
                    msg: `This Email is Already Registered as ${req.body.role}`,
                }
            })
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            email: {
                msg: `Server side Error`,
            }
        })
    }
}

const patientValidatorResults = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    console.log(mappedErrors);
    if (Object.keys(mappedErrors).length == 0) {
        next();
    } else {
        res.status(500).json(mappedErrors);
    }
}

const checkDomain = async (req, res, next) => {
    try {
        if (req.body.role === 'patient') {
            next();
        } else {
            const university = await InstitueModel.find({});
            let ok = false;
            const index = req.body.email.indexOf("@");
            const email = req.body.email.slice(index);
            console.log(email);
            for (let data of university) {
                const domains = stringSpliter(data.domains);
                console.log(domains);
                let idx = false;
                domains.forEach(uni => {
                    if (uni == email) {
                        idx = true;
                    }
                });
                if (idx) {
                    ok = true;
                    break;
                }
            }
            if(ok){
                next();
            }else{
                res.status(500).json({
                    email: {
                        msg: `This Institute domain is not registered in our server`,
                    }
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
                email: {
                    msg: `This Institute domain is not registered in our server`,
                }
        });
    }
}

module.exports = {
    patientValidator,
    patientValidatorResults,
    emailValidator,
    checkDomain,
}