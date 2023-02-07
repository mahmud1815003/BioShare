//External Imports
const express = require('express');
const { getJWT } = require('../../Middleswares/Login/loginJWT');
const router = express.Router();

// Internal Imports
const {loginValidator,loginValidatorResults,credentialValidator} = require('../../Middleswares/Login/loginValidator');

//Router


router.post('/', loginValidator, loginValidatorResults, credentialValidator, getJWT);

module.exports = router;