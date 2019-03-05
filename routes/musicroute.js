/* musicroute.js
   Main entry point for all music entities
*/
module.exports = function(httpServer)
{
  mongoose = require('../db');
  httpServer.use(function(req, res, next){
    var language = req.header("Accept-Language")
    /*if(language === undefined)
      language = "en"*/
    req.language = language
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
