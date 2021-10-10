const mongoose = require('mongoose');

const JeansSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required']
    }
    ,
    size: {
        type: Number,
        required: [true, 'Size is required']
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Jeans', JeansSchema);