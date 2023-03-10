const mongoose = require('mongoose');

const ShopModel = new mongoose.Schema({
    ShopName: {
        type: String,
    },
    ShopID: {
        type: String
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
    description: {
        type: String,
    },
    OwnerName: {
        type: String,
    },
    Location: {
        type: String,
    },
    OpenTime: {
        type: String,
    },
    CloseTime: {
        type: String,
    },
    isTop: {
        type: Boolean,
        default: false
    },
    isNearest: {
        type: Boolean,
        default: false
    },
    isMan: {
        type: Boolean,
        default: false
    },
    isWoman: {
        type: Boolean,
        default: false
    },
    Queue: {
        type: Number,
        default: 0
    },
    WaitingTime: {
        type: Number,
        default: 0
    },
    walk: {
        type: Number,
        default: 3
    }
});

module.exports = mongoose.model('Shop', ShopModel);