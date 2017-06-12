var express = require("express");
var app = express();
var ejs = require("ejs");
var router = express.Router();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
connection = require("../config/mysql.js");
var start = 0;
var n = 3;
let page = 4;
router.get('/', function(req, res) {

    connection.query(`select * from render limit ${start} , ${n} `, function(err, data) { //执行sql语句
        console.log(data.length)
            //console.log(page)
        res.render('index', {
            "data": data,
            "page": page
        })
    })
});
module.exports = router;