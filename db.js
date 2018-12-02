/* db.js */
var mongoose = require('mongoose');
require('dotenv').config();
//var connectionstring = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/carnatic-db';
var dbhost = process.env.DB_HOST || "127.0.0.1"
var dbport = process.env.DB_PORT || "27017"
var connectionstring = 'mongodb://'+dbhost+':'+dbport+'/carnatic-db';
console.log(connectionstring);
mongoose.connect(connectionstring, function(error) {
  if(error)
    return console.error(err);
});
module.exports = mongoose;
