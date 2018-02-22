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
const postRoutes = require('./routes/posts');
const paragraphRoutes = require('./routes/paragraphs');
//const tagRoutes = require('./routes/tags');



const app = express();

// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV]);

// Bind all Models to a knex instance
Model.knex(knex);

//midleware
app.use(helmet());
app.use(compression());
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//allow cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Route registration
app.use('/', index);
app.use('/posts', postRoutes);
app.use('/paragraphs', paragraphRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // send the error as json
    res.status(err.status || 500).json({
        error: {
            message: err.message,
        }
    });
});

module.exports = app;
