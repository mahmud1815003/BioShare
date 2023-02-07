const doctorModel = require('../../Models/doctor');


const getDoctorsList = async(req,res,next) => {
    try{
        const data = await doctorModel.find({});
        if(data){
            let doctors = [];
            for(let x of data){
                const doc =  x.toObject();
                delete doc.password;
                doctors.push(doc);
            }
            res.status(200).json({
                doctors,
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
    getDoctorsList,
}