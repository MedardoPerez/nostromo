var mysql = require('mysql');
var connection = mysql.createPool({
    host: '31.220.104.1',
    user: 'u941868463_mono',
    password: 'Nostromo2017',
    database: 'u941868463_fcapp'
});
module.exports = connection;
