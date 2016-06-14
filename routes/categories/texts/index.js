const texts = require('express').Router({ mergeParams: true });
const textModel = require('../../../models/text');
const all =  require('./all');
const single = require('./single');
const hasModel = require('../../../utils/modelVerifyer');

texts.route('/')
    .get(hasModel(textModel), all);

texts.route('/:textId')
    .get(hasModel(textModel), single);

module.exports = texts;