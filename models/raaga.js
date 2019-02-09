/* raaga.js */
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
var raagaSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: String,
  parent: String,
  classification: {
    chakraname: String,
    serialnumber: Number
  },
  aarohanam: [{ type: Schema.Types.ObjectId, ref: 'Note', required: true }],
  avarohanam: [{ type: Schema.Types.ObjectId, ref: 'Note', required: true }],
});

mongoose.model('Raaga', raagaSchema);
module.exports = mongoose.model('Raaga');
