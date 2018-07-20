/* db.js */
var mongoose = require('mongoose');
require('dotenv').config();
var connectionstring = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/carnatic-db';
console.log(connectionstring);
mongoose.connect(connectionstring);
