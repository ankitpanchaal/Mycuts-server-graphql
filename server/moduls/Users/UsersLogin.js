const mongoose = require('mongoose');

const UserModal = new mongoose.Schema({
    UserName: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model('UserModal', UserModal);