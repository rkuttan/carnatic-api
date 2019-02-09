module.exports = function(httpServer)
{
/*  httpServer.all('/note', function (req, res, next) {
  console.log('Accessing the note APIs...')
  next() // pass control to the next handler
});*/
 music_controller = require("../controllers/notecontroller")
 /*httpServer.get('/note/:noteid', function (req, res) {
        console.log('Accessing the note GET API...'+req.params.noteid)
        res.send(req.params.noteid);
  });*/



httpServer.get('/note/:id', music_controller.getnote);
httpServer.post('/note', music_controller.addnote);
httpServer.patch('/note/:id', music_controller.updatenote);
httpServer.delete('/note/:id', music_controller.deletenote);

httpServer.get('/notes', music_controller.getallnotes);
httpServer.get('/note/base/:basename', music_controller.getbasenote);
httpServer.patch('/note/:id/language', music_controller.updatenotelanguage);
httpServer.get('/note/:id/language/:language', music_controller.getnotelanguage);
httpServer.delete('/note/:id/language/:language', music_controller.deletenotelanguage)

}
