const photos = require('express').Router({ mergeParams: true });
const all = require('./all');
const single = require('./single');
const findObject = require('../../../utils/findObject');

photos.get('/', all);

photos.get('/:photoId', single);

module.exports = photos;