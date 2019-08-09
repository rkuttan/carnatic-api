/* musicroute.js
   Main entry point for all music entities
*/
module.exports = function(httpServer)
{
  mongoose = require('../db');
  httpServer.use(function(req, res, next){
    var language = req.header("Accept-Language")
    console.log("language from client "+language);
    var requestedlangs = [];
    if(language === undefined) {
      requestedlangs[0] = "en"
    } else {
      requestedlangs = language.split(',')
    if(requestedlangs[0] === undefined  || requestedlangs[0].includes('en')) {
      requestedlangs[0] = "en"
    }  
    }
    
      
    req.language = requestedlangs[0]
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
