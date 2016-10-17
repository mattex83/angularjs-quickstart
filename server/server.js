
'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');

var app = express();
var router = express.Router();

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/app',express.static('../app'));

var port = 8080;

app.use(require('./controllers/service'));

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

module.exports = app;
