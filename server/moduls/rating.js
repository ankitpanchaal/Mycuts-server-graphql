const mongoose = require('mongoose');

const ratingModel = new mongoose.Schema({
    ShopID: {
        type: String,
    },
    service: { type: Number, default: 3 },
    facility: { type: Number, default: 3 },
    behaviour: { type: Number, default: 3 },
    CostomerExperience: { type: Number, default: 3 }
});

module.exports = mongoose.model('ShopRating', ratingModel);