//External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const {doctorValidator, doctorValidatorResults} = require('../../Middleswares/HospitalAdmin/doctorValidators');
const { addDoctor } = require('../../Middleswares/HospitalAdmin/addDoctor');
const {staffValidator, staffValidatorResults} = require('../../Middleswares/HospitalAdmin/staffValidators');
const { addStaff } = require('../../Middleswares/HospitalAdmin/addStaff');
const { hospitalRoleValidator } = require('../../Middleswares/RoleValidator/hospitalValidator');
const { getHospital } = require('../../Middleswares/HospitalAdmin/getHospitalData');
//Router

router.get('/:email', hospitalRoleValidator, getHospital);
router.post('/doctor/add', doctorValidator, doctorValidatorResults, hospitalRoleValidator, addDoctor);
router.post('/staff/add', staffValidator, staffValidatorResults, hospitalRoleValidator, addStaff);

module.exports = router;