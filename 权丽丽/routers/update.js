var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
let n = 3;
let page = 4;
router.post('/update', function(req, res) {
    var ind = req.body.index;
    var start = n * (ind - 1);
    console.log(start)
    connection.query(`select * from render limit ${start} , ${n} `, function(err, data) { //执行sql语句
        console.log(data)
        res.render('index', {
            "data": data,
            "page": page
        })
    });
    // res.send({
    //     "code": 0
    // })
});
module.exports = router;