const photos = require('express').Router();
const photoModel = require('../../models/photo');
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');
const hasModel = require('../../utils/modelVerifyer');

photos.param('photoId', findObject('photo'));

photos.route('/')
    .get(hasModel(photoModel), all);

photos.get('/:photoId', single);

module.exports = photos;