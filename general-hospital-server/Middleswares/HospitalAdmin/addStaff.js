const StaffModel = require('../../Models/staff');
const bcrypt = require('bcrypt');

const addStaff = async (req,res,next) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10);
        const newInstitute = new StaffModel({
            ...req.body,
            password: pass,
        });
        const result = await newInstitute.save();
        res.status(200).json({
            message: "Staff Added Successfully",
        });
    }catch(error){
        console.log("Staff Error: "+error);
        res.status(500).json({
            message: "Server Side Error",
        });
    }
}

module.exports = {addStaff};