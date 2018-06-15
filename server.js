var express = require('express');
var serveStatic = require('serve-static');
var cors = require('cors');
var app = express();
app.use(serveStatic(__dirname));
app.use(cors());
var port = 8910;
app.listen(port);
console.log("app server running on "+port);
