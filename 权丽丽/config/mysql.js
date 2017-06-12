//引入
var mysql = require("mysql");
//创建连接
var connection = mysql.createConnection({
        "host": "localhost",
        "user": "root",
        "password": "123",
        "port": "3306",
        "database": '1503a' //库名
    })
    //连接
connection.connect();
module.exports = connection;