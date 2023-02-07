const doctorModel = require('../../Models/doctor');


const getDoctorData = async(req,res,next) => {
    try{
        const data = await doctorModel.findOne({email: res.locals.user.email});
        if(data){
            const doctor = {
                name: data.name,
                email: data.email,
                education: data.education,
                posting: data.posting,
                mobile: data.mobile,
                designation: data.designation,
                appointmentDays: data.appointmentDays,
            };
            res.status(200).json({
                doctor,
            });
        }else{
            res.status(500).json({
                message: 'Not Valid Token',
            });
        }
    }catch(error){
        console.log('Doctor Get Error' , error);
        res.status(500).json({
            message: 'Server side error in getting data',
        });
    }
}

module.exports = {
    getDoctorData,
}