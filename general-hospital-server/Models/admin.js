const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;