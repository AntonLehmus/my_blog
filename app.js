require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const Knex = require('knex');
const { Model } = require('objection');
const helmet = require('helmet');
const compression = require('compression');

const index = require('./routes/index');
const posts = require('./routes/posts');


const app = express();

// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV]);

// Bind all Models to a knex instance. If you only have one database in
Model.knex(knex);


app.use(helmet());
app.use(compression());
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route registration
app.use('/', index);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error as json
  res.status(err.status || 500).json({
    error:{
      message: err.message,
    }
  });
});

module.exports = app;
