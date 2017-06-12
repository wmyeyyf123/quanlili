var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
router.get("/product", function(req, res) {
    var id = req.query.id;
    //console.log(id);
    connection.query("select * from render where no=" + id + "", function(err, data) {
        var count = data[0].count;
        if (data.length > 0) {
            res.render('product', {
                "data": data[0],
                'count': count
            })
        }
    });
})
module.exports = router;