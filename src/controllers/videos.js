const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const Video = require('../models/Video');

module.exports = {

    async createVideo(req, res) {
        const { type, name, number } = req.body;

        const newVideo = new Video({
            type, name, number
        });

        newVideo.save().then((video) => {
            return res.status(StatusCodes.OK).json(video);
        }).catch((err) => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                error: err
            });
        });
    },

    async getVideoById(req, res) {
        const { id } = req.params;

        Video.findById(id).then((video) => {
            res.status(StatusCodes.OK).json(video);
        });
    }

}