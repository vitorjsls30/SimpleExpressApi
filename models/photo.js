var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
    id: Number,
    categorId: Number,
    name: String
});

module.exports = mongoose.model('Photo', photoSchema);