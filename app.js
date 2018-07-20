// app.js
var express = require('express');
var httpServer = express();
var db = require('./db');
var NoteController = require('./note/NoteController');
httpServer.use('/notes', NoteController);

module.exports = httpServer;
