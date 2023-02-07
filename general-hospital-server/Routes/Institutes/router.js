//External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const {addInstituteValidator, addInstituteValidatorResults} = require('../../Middleswares/Institutes/addInstitute');
const {addInstitute} = require('../../Middleswares/Institutes/addInstituteDatabase');
const InstitueModel = require('../../Models/institute');

//Routes
router.get('/all', async (req,res,next) => {
    try{
        const data = await InstitueModel.find({});
        console.log(data);
        if(data){
            res.json(data);
        }
    }catch(error){
        next("Data Fecting Error in Server");
    }
});


router.post('/add',addInstituteValidator, addInstituteValidatorResults, addInstitute);

module.exports = router;