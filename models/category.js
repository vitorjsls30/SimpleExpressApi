var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    id: Number,
    name: String
});

module.exports = mongoose.model('Category', categorySchema);