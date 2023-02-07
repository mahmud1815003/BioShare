const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const HospitalModel = mongoose.model('Hospital', hospitalSchema)

module.exports = HospitalModel;