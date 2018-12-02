// app.js
var express = require('express');
var httpServer = express();
var bodyParser = require('body-parser');
httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(bodyParser.json());
require('./routes/musicroute')(httpServer);
httpServer.use(errorHandler);
httpServer.use(handle404);

function errorHandler (err, req, res, next) {
  console.log(err.stack)
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).json({ error: "API error occured "+err.message})
  }

}

function handle404(req, res, next) {
  res.status(404).json({error: "Not found anything matching "+req.path})
}

module.exports = httpServer;
