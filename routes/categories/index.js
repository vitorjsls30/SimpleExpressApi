const categories = require('express').Router();
const all = require('./all');
const single = require('./single');
const photos = require('./photos');
const texts = require('./texts');

categories.get('/', all);

categories.use('/:categoryId/texts', texts);

categories.use('/:categoryId/photos', photos);

categories.get('/:categoryId', single);

module.exports = categories;