const mongoose = require('mongoose');
const hospital = require('../../Models/hospital');

const getHospital = async (req,res) => {
    try{
        const data = await hospital.findOne({email: req.params.email});
        if(data){
            response = data.toObject();
            delete(response.password);
            delete(response._id);
            delete(response.createdAt)
            delete(response.updatedAt)
            delete(response.__v)
            res.status(200).json({
                hospital: response,
            })
        }else{
            res.status(404).json({
                msg: 'Request Not Found',
            })
        }
    }catch(error){
        console.log(error);
        res.send(500).json({
            msg: error.message,
        })
    }
}

module.exports = {
    getHospital,
}