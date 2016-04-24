var Server = require('../index.js');

module.exports = Rx.Observable.create(function(observer));

observer.onNext(function(event){
  return {team: A, event: event}
})

observer.onError();
