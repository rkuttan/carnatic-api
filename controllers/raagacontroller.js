var Note = require("../models/note")
var Raaga = require("../models/raaga")

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
  Raaga.findById(req.params.id, {languages: {$elemMatch: {language: req.language}}}, {"languages.$": 1}, function(err, raaga) {
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

/*exports.getraagalanguage = function(req, res, next){
  Raaga.findById(req.params.id, {languages: {$elemMatch: {language: req.params.language}}}, {"languages.$": 1}, function(err, raaga) {
    if (err)
      return next(err);
    else if (raaga === null || raaga.languages.length === 0)
      return next()
    else
    {
      console.log(raaga.languages.length)
      res.status(200).send(raaga);
    }
  }).populate({path: 'aarohanam',
               match: { "languages.language": req.params.language},
               select: {"languages.language.symbol"}
             }).
  populate('avarohanam');*/

//}
