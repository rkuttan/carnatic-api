/* raaga.js */
var mongoose = require('mongoose');
var mongoosepaginate = require('mongoose-paginate-v2')
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
var raagaSchema = new mongoose.Schema({
  parent: {type: Boolean, required:true},
  melakarthanum: {type: Number, required:true},
  origin: {type: String, required:true},
  languages: [{
     language: {type: String},
     name: { type: String, required: true },
     description: {type: String},
     chakraname: {type: String}
  }],
  parentraaga: { type: Schema.Types.ObjectId, ref: 'Raaga'},
  aarohanam: [{ type: Schema.Types.Mixed, ref: 'Note'}],
  avarohanam: [{ type: Schema.Types.Mixed, ref: 'Note'}]
});
raagaSchema.plugin(mongoosepaginate)
mongoose.model('Raaga', raagaSchema);
module.exports = mongoose.model('Raaga');
