const staffModel = require('../../Models/staff');


const getStaffData = async(req,res,next) => {
    try{
        const data = await staffModel.findOne({email: res.locals.user.email});
        if(data){
            const staff = {
                name: data.name,
                email: data.email,
                education: data.education,
                posting: data.posting,
                mobile: data.mobile,
                designation: data.designation,
            };
            res.status(200).json({
                staff,
            });
        }else{
            res.status(500).json({
                message: 'Not Valid Token',
            });
        }
    }catch(error){
        console.log('Staff Get Error' , error);
        res.status(500).json({
            message: 'Server side error in getting data',
        });
    }
}

module.exports = {
    getStaffData,
}