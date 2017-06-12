var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
router.post("/delete", function(req, res) {
    var id = req.body.id;
    //console.log(req.body.id);
    connection.query("delete from render where no=" + id + "");
    res.send({
        "code": 0
    })
})
module.exports = router;