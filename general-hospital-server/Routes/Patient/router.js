//External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const {patientValidator, patientValidatorResults, emailValidator, checkDomain} = require('../../Middleswares/User/userValidators');
const {addUser} = require('../../Middleswares/User/addUsers');
const { patientRoleValidator } = require('../../Middleswares/RoleValidator/patientValidator');
const { getPatientData } = require('../../Middleswares/Patient/getPatient');
const { getDoctorsList } = require('../../Middleswares/Patient/getDoctorList');

router.get('/getPatient', patientRoleValidator, getPatientData);
router.get('/all', patientRoleValidator, getDoctorsList);

router.post('/add', patientValidator, patientValidatorResults, checkDomain, emailValidator, addUser);

module.exports = router;