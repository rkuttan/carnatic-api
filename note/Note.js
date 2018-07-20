/* note.js */
var mongoose = require('mongoose');
var noteSchema = new mongoose.Schema({
  symbol: String,
  description: String,
  basename: String,
  westernnotation: {
    name: String,
    notation: String
  }
});
mongoose.model('Note', noteSchema);
module.exports = mongoose.model('Note');
