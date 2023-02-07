const mongoose = require('mongoose');
const doctorModel = require('../../Models/doctor');

const updateDoctor = async (req,res,next) => {
    try{
        const doctor = res.locals.user;
        const week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
        const data = req?.body?.map(day => {
            return week.find(x => day == x);
        });
        const fullData = await doctorModel.findOne({email: doctor.email});
        fullData.appointmentDays = data || [];
        const response = await fullData.save();
        const finalData = response.toObject();
        res.status(200).json({
            appointmentDays: finalData.appointmentDays
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: "Server Side Error",
        })
    }
}

module.exports = {
    updateDoctor,
}