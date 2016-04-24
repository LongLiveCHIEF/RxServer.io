var Server = require('./server');
var Rx = require('rxjs/rx');

var connections = Server
  .filter(function(event){
    return 'connected';
  });

var authenticated = Rx.Observable.create(function(obs){
    obs.onNext(authenticate);
    obs.onError("user not authenticated");
    obs.onCompleted();
});

function authenticate(user){
  if(user == "chief"){
      return true;
  } else {
    return false;
  }
};
module.exports = authenticated;
