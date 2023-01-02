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
    },
    Image: {
        type: String,
    },
    Location: {
        type: String,
    }
});

module.exports = mongoose.model('UserModal', UserModal);