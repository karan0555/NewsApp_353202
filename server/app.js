var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news'); 
var user = require('./models/users');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var compiler = webpack(webpackConfig);


passport.serializeUser(function(user,done){
  console.log("inside Serial");
  done(null,user.id);
})

passport.deserializeUser(function(id,done){
  console.log("deserializeUser");
  user.findById(id, function(err, user){
    console.log("inside deserializeUser "+user);
    done(err,user);
  });
});

passport.use(new LocalStrategy(
  function(username,password,done){
    user.findOne({username: username, password: password}, function(err, user){
      if(err) { return done(err); }
      if(!user){ return done(null, false);}
      // if(!user.verifyPassword(password)){ return done(null,false); }
      return done(null, user);
    });
  }
  ));

app.use(webpackDevMiddleware(compiler, {
 publicPath: webpackConfig.output.publicPath,
   stats: {colors: true}, // Same as `output.publicPath` in most cases.
   quiet: true,
   noInfo: true,
   host: '0.0.0.0',
   watchOptions:{
     aggregateTimeout:300,
     poll:1000
   }
}));

app.use(webpackHotMiddleware(compiler, {
   log: console.log,
}))

mongoose.connect('mongodb://localhost:27017/mydb');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({secret: 'accesskey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());

app.use('/', index);
app.use('/users', users);
app.use('/news',news);

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

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
