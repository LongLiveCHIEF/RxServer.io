var authenticated = require('./authenticated');
var fs = require('fs');

authenticated
  .filter(functon(event){
      return (event === "get_file")
  })
  .forEach(function(file){
    this.socket.emit("file_ready", file);
  })
