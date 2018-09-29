const config = require('./config.json');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

const app = express();
//YOSBEH.1.1[A]
const db = require('./_helpers/db');
const jwt = require('./_helpers/jwt');
//const errorHandler = require('_helpers/error-handler');

const HomeController = require('./home/HomeController');
const ArticleController = require('./models_controllers/article/ArticleController');
const ArticleCategoryController = require('./models_controllers/article/ArticleCategoryController');
const ArticleTagController = require('./models_controllers/article/ArticleTagController');
const LocationController = require('./models_controllers/location/LocationController');
const PatientRegistrationController = require('./models_controllers/patientRegistration/PatientRegistrationController');
const UserController = require('./models_controllers/user/UserController');
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
app.use(cors());
app.use(jwt());
app.use(passport.initialize());
app.use(passport.session()) require('./');
app.use('/', HomeController);
app.use('/artikel', ArticleController);
app.use('/kategoriArtikel', ArticleCategoryController);
app.use('/tagArtikel', ArticleTagController);
app.use('/locations', LocationController);
app.use('/patientRegistrations', PatientRegistrationController);
app.use('/users', UserController);
//app.use(errorHandler);
//YOSBEH.2.1[Z]

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
