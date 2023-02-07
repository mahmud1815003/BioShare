const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
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
    }
}, { timestamps: true });

const StaffModel = mongoose.model('Staff', staffSchema)

module.exports = StaffModel;