var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
router.post("/insert", function(req, res) {
    var id = req.body.id;
    var text = req.body.text;
    var count = req.body.count;
    console.log(text);
    console.log(count)
    connection.query("update render set count='" + count + "', cont='" + text + "' where no=" + id + " ", function(err, data) {
        console.log(data)
    });
    res.send({
        "code": 0
    })
})
module.exports = router;