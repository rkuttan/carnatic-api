var Note = require("../models/note")


exports.getnote = function(req, res, next){
  Note.findOne({symbol: req.params.symbol}, function(err, note) {
    if (err)
      return next(err);
    else if (note === null)
      return next()
    else
    {
      console.log(note)
      res.status(200).send(note);
    }
  })
}

exports.addnote = function (req, res, next) {
  var newnote = new Note(req.body)
  Note.create(newnote, function (err, newnote) {
        if (err)
          return next(err);
        else if (newnote === null)
          return next()
        else
        {
          console.log(newnote)
          res.status(201).send(newnote);
        }

    })
}

exports.deletenote = function(req, res, next){
  Note.findOneAndDelete({symbol: req.params.symbol}, function(err, note) {
    if (err)
      return next(err);
    else if (note === null)
      return next()
    else
    {
      console.log(note)
      res.status(200).send(note);
    }
  })
}

exports.getallnotes = function(req, res, next){
  Note.find({}, function(err, notes) {
    if (err)
      return next(err);
    else if (notes === null)
      return next()
    else
    {
      console.log(notes)
      res.status(200).send(notes);
    }
  })
}

exports.updatenote = function(req, res, next){
  Note.findOneAndUpdate({symbol: req.params.symbol}, req.body, {new:true}, function(err, note) {
    if (err)
      return next(err);
    else if (note === null)
      return next()
    else
    {
      console.log(note)
      res.status(200).send(note);
    }
  })
}

exports.getbasenote = function(req, res, next){
  Note.find({basename: req.params.basename}, function(err, notes) {
    if (err)
      return next(err);
    else if (notes === null)
      return next()
    else
    {
      console.log(notes)
      res.status(200).send(notes);
    }
  })
}

function dbcallback(err, note, next, res) {
  if (err)
    return next(err);
  else if (note === null)
    return next()
  else
  {
    console.log(note)
    res.status(200).send(note);
  }
}
