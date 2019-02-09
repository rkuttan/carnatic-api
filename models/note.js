/* note.js */
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
var noteSchema = new mongoose.Schema({
  _id: {type: String},
  languages: [{
     language: {type: String},
     symbol: String,
     basename: String,
     description: String
  }],
  westernnotation: {
    name: String,
    notation: String
  },
  basefrequency: Number
});
noteSchema.index({ _id: 1, language: 1}, { unique: true });

mongoose.model('Note', noteSchema);
module.exports = mongoose.model('Note');
