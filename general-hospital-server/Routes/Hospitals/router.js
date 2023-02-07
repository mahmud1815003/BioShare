//External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const Hospital = require('../../Models/hospital');
const {hospitalValidator, hospitalValidatorResults} = require('../../Middleswares/Hospital/hospitalValidator');
const {addHospital} = require('../../Middleswares/Hospital/addHospital');

router.get('/all', async(req,res,next) => {
    try{
        const data = await Hospital.find({});
        if(data){
            let hos = [];
            for(let x of data){
                hos.push({
                    name: x.name,
                    address: x.address,
                    mobile: x.mobile,
                    email: x.email,
                })
            }
            res.json(hos);
        }
    }catch(error){
        next("Data Fecting Error in Server");
    }
});

router.post('/add', hospitalValidator, hospitalValidatorResults, addHospital);

module.exports = router;