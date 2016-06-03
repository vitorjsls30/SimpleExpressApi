const texts = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

texts.param('textId', findObject('text'));

texts.get('/', all);

texts.get('/:textId', single);

module.exports = texts;