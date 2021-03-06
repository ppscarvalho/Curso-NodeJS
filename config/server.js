var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
//var expressValidator = require('express-validator');
//const {check, validationResult} = require('express-validator/check');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

//Middle
app.use(bodyParser.urlencoded({extended: true}));
//app.use(check());

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;