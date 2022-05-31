const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const VideoEvent = require('../models/VideoEvent');

module.exports = {

    async createVideoEvent(req, res) {
        const { id } = req.params;
        const { s } = req.query;
        const { type, action, event } = req.body;

        const newVideoEvent = new VideoEvent({
            seconds: s, videoId: id, type, action, event
        });

        newVideoEvent.save().then((videoEvent) => {
            return res.status(StatusCodes.OK).json(videoEvent);
        }).catch((err) => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                error: err
            });
        });
    },

    async getVideoEventByTime(req, res) {
        const { id } = req.params;
        const { s } = req.query;

        VideoEvent.find({
            videoId: id,
            seconds: {
                $lte: s,
                $gte: s - 10
            }
        }).then((videoEvents) => {
            res.header('X-Total-Count', videoEvents.length);
            res.status(StatusCodes.OK).json(videoEvents);
        });
    }

}