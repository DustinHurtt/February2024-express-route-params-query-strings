var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var monkeysRouter = require('./routes/monkey')
var bananasRouter = require('./routes/banana')
var searchRouter = require('./routes/search')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/monkeys', monkeysRouter)
app.use('/bananas', bananasRouter)
app.use('/search', searchRouter)

module.exports = app;
