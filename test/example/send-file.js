var authenticated = require('./authenticated');
var fs = require('fs');

var fileEvents = authenticated.subscribe({
  next:function(event){
    return event.eventName;
  }
});

fileEvent
  .filter(function(event){
    return (event === "get_file");
  })
  .forEach(function(){
    authenticated.socket.sendFile(file);
  })
