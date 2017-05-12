
//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);
var bodyParser = require('body-parser');
var jade = require('jade');
var validator = require('validator');


//-- Middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/views'));


// --Routes

app.set('views', './views');
app.set('view engine', 'jade');