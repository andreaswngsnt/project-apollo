var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();
//YOSBEH.1.1[A]
var db = require('./db');

var HomeController = require('./home/HomeController');
var ArticleController = require('./article/ArticleController');
var ArticleCategoryController = require('./article/ArticleCategoryController');
var ArticleTagController = require('./article/ArticleTagController');
var LocationController = require('./location/LocationController');
var PatientRegistrationController = require('./patientRegistration/PatientRegistrationController');
////YOSBEH.1.1[Z]

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({
	limit: '50mb'
}));
app.use(express.urlencoded({
	extended: false,
	limit: '50mb'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

//YOSBEH.2.1[A]
app.use('/', HomeController);
app.use('/artikel', ArticleController);
app.use('/kategoriArtikel', ArticleCategoryController);
app.use('/tagArtikel', ArticleTagController);
app.use('/locations', LocationController);
app.use('/patientRegistrations', PatientRegistrationController);
////YOSBEH.2.1[Z]

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
