/* musicroute.js
   Main entry point for all music entities
*/
module.exports = function(httpServer)
{
  /*var bodyParser = require('body-parser');
  httpServer.use(bodyParser.urlencoded({ extended: true }));
  httpServer.use(bodyParser.json());
//var Note = require('./Note');

// CREATES A NEW NOTEObject
/*router.post('/', function (req, res) {
    Note.create({
      symbol: req.body.symbol,
      description: req.body.description,
      basename: req.body.basename,
      westernnotation: {
        name: req.body.westernnotation.name,
        notation: req.body.westernnotation.notation
      }
        },
        function (err, note) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(note);
        });
});*/
// RETURNS ALL THE NOTES IN THE DATABASE
/*router.get('/', function (req, res) {
    Note.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});*/

  mongoose = require('../db');
  httpServer.get('/', function (req, res, next) {
    console.log("API called")

        /*if(err)
        {
          return next(err);
        }
        else*/
          res.status(200).send("Music API running");
    });
  require('./noteroute')(httpServer);
}
