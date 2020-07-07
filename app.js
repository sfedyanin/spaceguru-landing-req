var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var empresasRouter = require('./routes/empresas');
var alquilarRouter = require('./routes/alquilar');
var nosotrosRouter = require('./routes/nosotros');
var guardadoRouter = require('./routes/guardado');
var menuRouter = require('./routes/menu');
var politicsRouter = require('./routes/politics');
var donationsRouter = require('./routes/donations');
var contractsRouter = require('./routes/contracts');
var termsRouter = require('./routes/term_conditions');
var storageRouter = require('./routes/storage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/empresas', empresasRouter);
app.use('/alquilar', alquilarRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/guardado', guardadoRouter);
app.use('/menu', menuRouter);
app.use('/politics', politicsRouter);
app.use('/terms', termsRouter);
app.use('/storage', storageRouter);
app.use('/contracts', contractsRouter);
app.use('/donations', donationsRouter);



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
