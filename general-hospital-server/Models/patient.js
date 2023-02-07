const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
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
    dataSending: {
        type: Boolean,
    },
    isVerified: {
        type: Boolean,
    }
}, { timestamps: true });

const PatientModel = mongoose.model('Patient', patientSchema)

module.exports = PatientModel;