const Institue = require('../../Models/institute');

const addInstitute = async (req,res,next) => {
    try{
        const newInstitute = new Institue(req.body);
        const result = await newInstitute.save();
        res.status(200).json({
            message: "Institute Added Successfully",
        });
    }catch(error){
        console.log("Institute Error: "+error);
        next("Server Side Error");
    }
}

module.exports = {addInstitute};