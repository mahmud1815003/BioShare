const DoctorModel = require('../../Models/doctor');
const bcrypt = require('bcrypt');

const addDoctor = async (req,res,next) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10);
        const newInstitute = new DoctorModel({
            ...req.body,
            password: pass,
        });
        const result = await newInstitute.save();
        res.status(200).json({
            message: "Doctor Added Successfully",
        });
    }catch(error){
        console.log("Doctor Error: "+error);
        res.status(500).json({
            message: "Server Side Error",
        });
    }
}

module.exports = {addDoctor};