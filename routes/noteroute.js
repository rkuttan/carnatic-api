CHECK_JWT = require("../utils/authenticate")
module.exports = function(httpServer)
{

music_controller = require("../controllers/notecontroller")



httpServer.get('/notes/:id', music_controller.getnote);
httpServer.post('/notes', CHECK_JWT, music_controller.addnote);
httpServer.patch('/notes/:id', CHECK_JWT, music_controller.updatenote);
httpServer.delete('/notes/:id', CHECK_JWT, music_controller.deletenote);
httpServer.get('/notes', music_controller.getallnotes);
httpServer.patch('/notes/:id/languages', CHECK_JWT, music_controller.updatenotelanguage);
httpServer.delete('/notes/:id/languages/:language', CHECK_JWT, music_controller.deletenotelanguage)
}
