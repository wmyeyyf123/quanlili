var express = require("express");
var app = express();
var ejs = require("ejs");
var router = express.Router();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
require('./config/config.js')(app);
app.use("/", router);
app.listen(9999, function() {
    console.log("9999........")
})