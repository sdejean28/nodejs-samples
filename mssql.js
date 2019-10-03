/*
 MICROSOFT SQL 
*/
var sql = require(‘mssql’);
var notifier = require(‘./notifier.js’)

var config = {
 user: “username”,
 password: “Pass@word”,
 server: ‘mssql’, 
 port : 1433,
 connectionTimeout : 10000
}

