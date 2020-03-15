const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    es6Renderer = require('express-es6-template-engine'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session);
    bodyParser = require('body-parser')

const indexRouter = require('./routes/index'),
    climbersRouter = require('./routes/users'),
    mountainsRouter = require('./routes/mountains'),
    waypointRouter = require('./routes/waypoint');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  }));
  app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    // store: new FileStore(),
    secret: 'get rad',
    resave: false,
    saveUninitialized: true,
    is_logged_in: false
}));

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', climbersRouter);
app.use('/mountains', mountainsRouter);
app.use('/waypoint', waypointRouter);

module.exports = app;
