const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var textSchema = new Schema({
    id: Number,
    categoryId: Number,
    text: String
});

module.exports = mongoose.model('Text', textSchema);