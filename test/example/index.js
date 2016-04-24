var Rx = require('rxjs/Rx');
var RxServer = require('@h3/rx-server.io')(Rx);

var options = {
  host: 'localhost',
  port: 8000
};
var Server = Rx.Observable.RxServer(config);

module.exports = Server;
