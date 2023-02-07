const Hospital = require('../../Models/hospital');
const bcrypt = require('bcrypt');

const addHospital = async (req,res,next) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10);
        const newInstitute = new Hospital({
            ...req.body,
            password: pass,
        });
        const result = await newInstitute.save();
        res.status(200).json({
            message: "Hospital Added Successfully",
        });
    }catch(error){
        console.log("Hospital Error: "+error);
        next("Server Side Error");
    }
}

module.exports = {addHospital};