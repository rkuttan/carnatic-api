/*exports.formquery = function(searchcriteria, lang){
  query = {}
  var keys = Object.keys( searchcriteria );
  for( var i = 0,length = keys.length; i < length; i++ ) {
     if(keys[i] == "name") {
       regexnamevalue = searchcriteria[keys[i]]
       console.log(searchcriteria[keys[i]])
       //query["languages"] = { $elemMatch: { language: lang , name: {$regex:'.*'+searchcriteria[keys[i]]+'.*', $options: 'i'}}}
       query["languages"] = { $elemMatch: { language: lang , name: {$regex: '.*'+regexnamevalue+'.*', $options: 'i'}}}
     }
    else if(keys[i] == "aarohanam" || keys[i] == "avarohanam") {
       query[keys[i]] = { $all: searchcriteria[keys[i]]}
     }
     else {
       query[keys[i]] = searchcriteria[keys[i]]

     }
   }
   console.log(query)
  return query
}*/

exports.formquery = function(req, lang){
  query = {}
  for (var param in req.query) {
    console.log("parameters "+param)
    if(param == "name") {
      regexnamevalue = req.query[param]
      query["languages"] = { $elemMatch: { language: lang , name: {$regex:'.*'+req.query[param]+'.*', $options: 'i'}}}
    } else {
      query[param] = req.query[param]
    }
 } 
   console.log(query)
  return query
}
