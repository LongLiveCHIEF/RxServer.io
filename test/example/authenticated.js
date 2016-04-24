var Server = require('./server');
var Rx = require('rxjs/rx');

module.exports = Server
  .filter(function(event){
    return 'connected';
  })
  .forEach(function(connection){
    return authenticate(connection);
  });

function authenticate(connection){
  if(connection.user == "chief"){
      return connection;
  } else {
    return new Error("user not authenticated");
  }
};
