module.exports = function(httpServer)
{

 raaga_controller = require("../controllers/raagacontroller")


httpServer.get('/raagas/:id', raaga_controller.getraaga);
httpServer.post('/raagas', raaga_controller.addraaga);
httpServer.patch('/raagas/:id', raaga_controller.updateraaga);
httpServer.delete('/raagas/:id', raaga_controller.deleteraaga);
httpServer.get('/raagas', raaga_controller.getraagalist);
//httpServer.get('/raagas/:id/languages/:language', raaga_controller.getraagalanguage);
httpServer.patch('/raagas/:id/languages', raaga_controller.updateraagalanguage);
httpServer.delete('/raagas/:id/languages/:language', raaga_controller.deleteraagalanguage);

}
