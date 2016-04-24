var authenticated = require('../authenticated');

module.exports = authenticated.filter(function(connection){
  connection.team = A;
  return connection;
});
