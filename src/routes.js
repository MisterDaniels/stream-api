var express = require('express');
var router = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const EventsController = require('./controllers/events');
const VideosController = require('./controllers/videos');

router.post('/video', celebrate({
    [Segments.BODY]: Joi.object().keys({
        type: Joi.string().valid('Series', 'Movie').required(),
        number: Joi.number().default(1),
        name: Joi.string().required()
    })
}), VideosController.createVideo);

router.get('/video/:id/event', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.objectId()
    }),
    [Segments.QUERY]: Joi.object().keys({
        s: Joi.number().min(0).default(0)
    })
}), EventsController.getVideoEventByTime);

router.post('/video/:id/event', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.objectId()
    }),
    [Segments.QUERY]: Joi.object().keys({
        s: Joi.number().min(0).default(0)
    }),
    [Segments.BODY]: Joi.object().keys({
        type: Joi.string().valid('pokedex').required(),
        action: Joi.string().valid('insert').required(),
        event: Joi.object().default({})
    })
}), EventsController.createVideoEvent);

module.exports = router;