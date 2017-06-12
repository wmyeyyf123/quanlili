var load = require('../routers/load.js');
var deletes = require("../routers/delete.js");
var update = require("../routers/update.js");
var product = require("../routers/product.js");
var insert = require("../routers/insert.js");
module.exports = function(app) {
    app.get("/", load);
    app.post('/update', update);
    app.post('/delete', deletes);
    app.get('/product', product);
    app.post('/insert', insert);
}