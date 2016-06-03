const photos = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

photos.param('photoId', findObject('photo'));

photos.get('/', all);

photos.get('/:photoId', single);

module.exports = photos;