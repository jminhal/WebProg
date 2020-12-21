var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var unitsRouters = require('./routes/unitsRouters');
var studentsRouters = require('./routes/studentsRouters');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/units', unitsRouters);
app.use('/api/students', studentsRouters);

module.exports = app;
