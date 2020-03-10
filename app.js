const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    es6Renderer = require('express-es6-template-engine'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index'),
    climbersRouter = require('./routes/climbers'),
    mountainsRouter = require('./routes/mountains');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/climbers', climbersRouter);
app.use('/mountains', mountainsRouter);

module.exports = app;
