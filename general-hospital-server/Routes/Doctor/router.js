//External Imports
const express = require('express');
const { getDoctorData } = require('../../Middleswares/Doctor/getDoctor');
const { updateDoctor } = require('../../Middleswares/Doctor/updateDoctor');
const { doctorRoleValidator } = require('../../Middleswares/RoleValidator/doctorValidator');
const router = express.Router();

// Internal Imports

//Router
router.get('/getDoctor', doctorRoleValidator, getDoctorData);
router.post('/updatedoctor', doctorRoleValidator, updateDoctor);



module.exports = router;