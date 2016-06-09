var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
    id: Number,
    categoryId: Number,
    name: String
});

module.exports = mongoose.model('Photo', photoSchema);