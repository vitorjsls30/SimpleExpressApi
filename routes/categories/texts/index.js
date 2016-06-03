const texts = require('express').Router({ mergeParams: true });
const all =  require('./all');
const single = require('./single');

texts.get('/', all);

texts.get('/:textId', single);

module.exports = texts;