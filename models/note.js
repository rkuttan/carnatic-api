/* note.js */
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
var noteSchema = new mongoose.Schema({
  symbol: { type: String, unique: true, required: true },
  description: String,
  basename: String,
  westernnotation: {
    name: String,
    notation: String
  }
});

mongoose.model('Note', noteSchema);
module.exports = mongoose.model('Note');
