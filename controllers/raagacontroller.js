var Note = require("../models/note")
var Raaga = require("../models/raaga")
require('mongoose-paginate-v2');
exports.addraaga = function (req, res, next) {
var multiraagas = []
for(i=0;i<req.body.length;i++) {
  var newraaga = new Raaga(req.body[i])
  multiraagas.push(newraaga)
}

  Raaga.create(multiraagas, function (err, multiraagas) {
        if (err){
          return next(err);
        }
        else if (multiraagas === null)
          return next()
        else
        {
          console.log(multiraagas)
          res.status(201).send(multiraagas);
        }

    })
}

exports.getraaga = function(req, res, next){
  Raaga.findById(req.params.id, {_id:0, 'parent':1, 'melakarthanum':1,'origin':1, languages: {$elemMatch: {language: req.language}}}, function(err, raaga) {
    if (err)
      return next(err);
    else if (raaga === null)
      return next()
    else
    {
      console.log(raaga)
      res.status(200).send(raaga);
    }
  }).populate({path: 'aarohanam',
               select: { languages: { $elemMatch: { language: req.language }}}}).
     populate({path: 'avarohanam',
               select: { languages: { $elemMatch: { language: req.language } }}})
}


exports.getraagalist = function(req, res, next){
  var pagenum =  parseInt(req.query.page, 10)
  if(Number.isNaN(pagenum))
     pagenum = 1
  const myCustomLabels = {
    totalDocs: 'raagacount',
    docs: 'raagas',
    limit: 'pagesize',
    page: 'currentpage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pagecount',
    pagingCounter: 'slNo'
};

var options = {
    limit: 5,
    page: pagenum,
    select: {'parent':1, 'melakarthanum':1,'origin':1, languages: {$elemMatch: {language: req.language}}},
    populate: [{  path: 'aarohanam',
                  select: { languages: { $elemMatch: { language: req.language }}}
               },
               {  path: 'avarohanam',
                  select: { languages: { $elemMatch: { language: req.language }}}
               }],
    customLabels: myCustomLabels
};

  Raaga.paginate({}, options, function(err, raagaresult) {
   if (err)
     return next(err);
   else if (raagaresult.raagas === null)
     return next()
   else
   {
     res.status(200).send(raagaresult);
   }
 })

}




exports.updateraaga = function(req, res, next){
  Raaga.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, raaga) {
    if (err)
      return next(err);
    else if (raaga === null)
      return next()
    else
    {
      console.log(raaga)
      res.status(200).send(raaga);
    }
  })
}

exports.deleteraaga = function(req, res, next){
  Raaga.findByIdAndRemove(req.params.id, function(err, raaga) {
    if (err)
      return next(err);
    else if (raaga === null)
      return next()
    else
    {
      console.log(raaga)
      res.status(200).send(raaga);
    }
  })
}
