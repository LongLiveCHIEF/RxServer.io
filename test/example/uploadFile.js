var authenticated = require('./authenticated');
var fs = require('fs');
var uploads = authenticated
  .filter(functon(event){
      return (event === "upload")
  })
  .forEach(function(file){
    fs.createwriteStream(path, file);
  })
