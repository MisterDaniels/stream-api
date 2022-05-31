const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoModel = new Schema({
    type: {
        type: String,
        default: 'Series'
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

module.exports = Video = mongoose.model('video', VideoModel);