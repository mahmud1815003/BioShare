const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
    },
    education: {
        type: String,
    },
    designation: {
        type: String,
    },
    posting: {
        type: String,
    },
    appointmentDays: {
        type: Array,
    }
}, { timestamps: true });

const DoctorModel = mongoose.model('Doctor', doctorSchema)

module.exports = DoctorModel;