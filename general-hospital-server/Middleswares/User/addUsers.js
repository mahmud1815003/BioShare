const Patient = require('../../Models/patient');
const Researcher = require('../../Models/researcher');
const bcrypt = require('bcrypt');

const addUser = async (req,res,next) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10);
        if(req.body.role == 'patient'){
            const newInstitute = new Patient({
                ...req.body,
                password: pass,
                isVerified: false,
            });
            const result = await newInstitute.save();
            res.status(200).json({
                message: "Patient Added Successfully",
            });
        }else{
            const newInstitute = new Researcher({
                ...req.body,
                password: pass,
                isVerified: false,
            });
            const result = await newInstitute.save();
            res.status(200).json({
                message: "Researcher Added Successfully",
            });
        }
    }catch(error){
        console.log("Hospital Error: "+error);
        next("Server Side Error");
    }
}

module.exports = {addUser};