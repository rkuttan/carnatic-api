module.exports = function(httpServer)
{

 raaga_controller = require("../controllers/raagacontroller")


httpServer.get('/raagas/:id', raaga_controller.getraaga);
//httpServer.get('/raagas', raaga_controller.getfilteredraagas);
httpServer.post('/raagas', raaga_controller.addraaga);
httpServer.patch('/raagas/:id', raaga_controller.updateraaga);
httpServer.delete('/raagas/:id', raaga_controller.deleteraaga);

//httpServer.get('/raagas/:id/languages/:language', raaga_controller.getraagalanguage);
/*httpServer.put('/note/:symbol', music_controller.updatenote);
httpServer.delete('/note/:symbol', music_controller.deletenote);
httpServer.get('/notes', music_controller.getallnotes);
httpServer.get('/note/base/:basename', music_controller.getbasenote);*/


}
