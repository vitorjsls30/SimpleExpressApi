const photos = require('express').Router({ mergeParams: true });
const photoModel = require('../../../models/photo');
const all = require('./all');
const single = require('./single');
const hasModel = require('../../../utils/modelVerifyer');

photos.route('/')
    .get(hasModel(photoModel), all);

photos.route('/:photoId')
    .get(hasModel(photoModel), single);

module.exports = photos;