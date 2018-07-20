/*server.js*/
var httpServer = require('./app');
var port = process.env.MUSIC_API_PORT || 3000;
var server = httpServer.listen(port, function() {
  console.log('Music API server listening on port ' + port);
});
