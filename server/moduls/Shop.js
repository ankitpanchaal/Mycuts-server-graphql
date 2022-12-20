const mongoose = require('mongoose');

const ShopModel = new mongoose.Schema({
    ShopName: {
        type: String,
    },
    ShopID: {
        type: Number
    },
    phone: {
        type: String,
    },
    email: {
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
    rating: {
        service: { type: Number, default: 3 },
        facility: { type: Number, default: 3 },
        behaviour: { type: Number, default: 3 },
        CostomerExperience: { type: Number, default: 3 }
    },
    walk: {
        type: Number,
        default: 3
    }
});

module.exports = mongoose.model('Shop', ShopModel);