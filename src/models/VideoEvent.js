const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoEventModel = new Schema({
    seconds: {
        type: Number,
        default: 0,
        min: 0
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    type: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    event: {
        type: Object,
        required: true
    }
}, {
    strict: false
});

module.exports = VideoEvent = mongoose.model('video-events', VideoEventModel);