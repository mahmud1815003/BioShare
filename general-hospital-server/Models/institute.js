const mongoose = require('mongoose');

const instituteSchema = mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    shortName: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    domains: {
        type: String,
    },
    isVerified: {
        type: Boolean,
    }
}, { timestamps: true });

const InstitueModel = mongoose.model('Institute', instituteSchema)

module.exports = InstitueModel;