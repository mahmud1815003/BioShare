const mongoose = require('mongoose');

const researcherSchema = mongoose.Schema({
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
}, { timestamps: true });

const ResearcherModel = mongoose.model('Researcher', researcherSchema)

module.exports = ResearcherModel;