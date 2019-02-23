/* musicroute.js
   Main entry point for all music entities
*/
module.exports = function(httpServer)
{
  mongoose = require('../db');
  httpServer.use(function(req, res, next){
    req.language = req.header("Accept-Language")
    console.log("Language set to "+req.language)
    next()
  })
  httpServer.get('/', function (req, res, next) {
    console.log("API called")
    res.status(200).send("Music API running");
  });
  require('./noteroute')(httpServer);
  require('./raagaroute')(httpServer);
}
