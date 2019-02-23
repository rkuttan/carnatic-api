module.exports = function(httpServer)
{

music_controller = require("../controllers/notecontroller")



httpServer.get('/notes/:id', music_controller.getnote);
httpServer.post('/notes', music_controller.addnote);
httpServer.patch('/notes/:id', music_controller.updatenote);
httpServer.delete('/notes/:id', music_controller.deletenote);

httpServer.get('/notes', music_controller.getallnotes);
//httpServer.get('/notes/base/:basename', music_controller.getbasenote);
httpServer.patch('/notes/:id/languages', music_controller.updatenotelanguage);
//httpServer.get('/notes/:id/languages/:language', music_controller.getnotelanguage);
httpServer.delete('/notes/:id/languages/:language', music_controller.deletenotelanguage)

}
