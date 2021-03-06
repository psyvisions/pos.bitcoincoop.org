var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('users', {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      username: { type: 'string' },
      password: { type: 'string' },
      last_login: { type: 'datetime' }
    }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
};
