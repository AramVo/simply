const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        index: true,
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const schema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    location: {
        type: pointSchema,
        index: '2dsphere',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CheckIn', schema);
