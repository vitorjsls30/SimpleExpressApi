const categories = require('express').Router();
const all = require('./all');
const single = require('./single');

categories.get('/', all);

categories.get('/:categoryId', single);

module.exports = categories;