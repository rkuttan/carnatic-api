module.exports = function(httpServer)
{

 raaga_controller = require("../controllers/raagacontroller")


httpServer.post('/raaga', raaga_controller.addraaga);
/*httpServer.get('/note/:symbol', music_controller.getnote);
httpServer.put('/note/:symbol', music_controller.updatenote);
httpServer.delete('/note/:symbol', music_controller.deletenote);
httpServer.get('/notes', music_controller.getallnotes);
httpServer.get('/note/base/:basename', music_controller.getbasenote);*/


}
