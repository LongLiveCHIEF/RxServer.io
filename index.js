var Rx = require('rxjs/Rx');
var SocketIO = require('socket.io');
var EventEmitter = require('events').EventEmitter;


function RxServer(){
  var io = SocketIO()();

  var observable = Rx.Observable.create();

  var observer = Rx.Observer.create();

  return Rx.Subject.create(observer, observable);
};

module.exports = RxServer;
