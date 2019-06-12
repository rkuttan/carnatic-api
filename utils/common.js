exports.formquery = function(searchcriteria, lang){
  query = {}
  var keys = Object.keys( searchcriteria );
  for( var i = 0,length = keys.length; i < length; i++ ) {
     if(keys[i] == "name") {
       regexnamevalue = searchcriteria[keys[i]]
       query["languages"] = { $elemMatch: { language: lang , name: {$regex:'.*'+searchcriteria[keys[i]]+'.*', $options: 'i'}}}
     }
    else if(keys[i] == "aarohanam" || keys[i] == "avarohanam") {
       query[keys[i]] = { $all: searchcriteria[keys[i]]}
     }
     else {
       query[keys[i]] = searchcriteria[keys[i]]

     }
   }
  return query
}
