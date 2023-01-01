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
    Bookings: {
        type: Array,
        ShopID: {
            type: String,
        },
        title: {
            type: String,
        },
        price: {
            type: String,
        },
        Image: {
            type: String,
        },
        description: {
            type: String,
        },
        tag: {
            type: String,
        },
        offerDis: {
            type: String,
        },
        offer: {
            type: Boolean,
        }
    },
});

module.exports = mongoose.model('UserModal', UserModal);