var Note = require("../models/note")
var Raaga = require("../models/raaga")

exports.addraaga = function (req, res, next) {

   var aarohanam = req.body.aarohanam
   var newraaga = new Raaga(req.body)
   aarohanam.forEach(function(value, index, array) {
   Note.findOne({symbol: value}, function(err, note) {
     if (err)
       return next(err);
     else if (note === null)
       return next()
     else
     {
       array[index] = note._id
       console.log("notearray "+notearray)
       if(index == array.length-1) {
         console.log("Save the raaga...")
         newraaga.aarohanam = array
         Raaga.create(newraaga, function (err, newraaga) {
               if (err)
                 return next(err);
               else if (newraaga === null)
                 return next()
               else
               {
                 console.log(newraaga)
                 res.status(201).send(newraaga);
               }
           })
       }
     }
   })
 })
  /*var avarohanam = req.body.avarohanam
  avarohanam.forEach(function(value, index, array){

  })*/
}
