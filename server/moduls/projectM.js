const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    discription: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    ClientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientM'
    }
});

module.exports = mongoose.model('ProjectM', ProjectSchema);