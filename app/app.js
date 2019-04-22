const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
const routes = require('../routes');
const config = require('../config/config');
const models = require('./models');
const {
	sendError
} = require('./services/util.service');
const app = express();

app.use(logger('development'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Passport
app.use(passport.initialize());

// Log env
console.log('Environment:', config.app);

// Database
models.sequelize.authenticate().then(() => {
	console.log('Connected to SQL database:', config.db_name);
}).catch(err => {
	console.error('Unable to connect to SQL database:', config.db_name, err);
});
if (config.app === 'development') {
	models.sequelize.sync();
}

// CORS
app.use(cors());

// Router
app.use('/v1', routes);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

// Error handlerẽ
app.use(function (err, req, res, next) {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Return error
	sendError(res, err, err.status || 500);
});

module.exports = app;

//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
	console.error('Uncaught error', pe(error));
});
