const mongoose = require('mongoose');

const ServiceModel = new mongoose.Schema({
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
    },

});

module.exports = mongoose.model('Service', ServiceModel);