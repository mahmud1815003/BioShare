const patientModel = require('../../Models/patient');


const getPatientData = async(req,res,next) => {
    try{
        const data = await patientModel.findOne({email: res.locals.user.email});
        if(data){
            const patient = {
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                dataSending: data.dataSending,
            };
            res.status(200).json({
                patient,
            });
        }else{
            res.status(500).json({
                message: 'Not Valid Token',
            });
        }
    }catch(error){
        console.log('Patient Get Error' , error);
        res.status(500).json({
            message: 'Server side error in getting data',
        });
    }
}

module.exports = {
    getPatientData,
}