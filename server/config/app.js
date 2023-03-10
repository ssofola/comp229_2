/*****************************************
 //    File Name: app.js
 // Student Name: Olusegun Sofola
 // Description: application's server side configuration file
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
// create required objects
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// database setup
let mongoose = require('mongoose');
let db = require('./db');

// point mongo to db URI
mongoose.connect(db.URI,{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.set('strictQuery', true);
let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error:'));
mongoDB.once('open', () =>{
  console.log('connected to mongoDB ...');
})

// define the routers
let indexRouter = require('../routes');
let usersRouter = require('../routes/users');
let booksRouter = require('../routes/book');
let bizContactsRouter = require('../routes/biz_contact');

// get the app object
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// additional configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
}))

//initialize connect-flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration
let UserModel = require('../models/user');
let User = UserModel.User;

//implement a user authentication strategy
passport.use(User.createStrategy());

// serialize and deserialize the User Info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// define the routers and link them to their
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book-list', booksRouter);
app.use('/biz-contact-list', bizContactsRouter);

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
  res.render('error', { title: 'Error'});
});

module.exports = app;
