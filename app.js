// app.js
var express = require('express');
var httpServer = express();
var bodyParser = require('body-parser');
var cors = require('cors')
httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(bodyParser.json());
var corsOptions = {
  //origin: 'http://localhost:4200',
  origin: process.env.CORS_HOST_ORIGIN,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
httpServer.use(cors(corsOptions));

require('./routes/musicroute')(httpServer);

httpServer.use(errorHandler);
httpServer.use(handle404);

function errorHandler (err, req, res, next) {
  console.log(err.stack)
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: err.message });
  } else if(err.name === 'UnauthorizedError'){
    res.status(401).json({ error: err.message})
  } else {
    res.status(500).json({ error: "API error occured "+err.message})
  }

}

function handle404(req, res, next) {
  res.status(404).json({error: "Not found anything matching "+req.path})
}

module.exports = httpServer;
