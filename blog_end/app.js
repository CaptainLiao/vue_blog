let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let artTemplate = require('express-art-template');
let template = require('art-template');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);

let env = process.env.NODE_ENV || 'development';

let app = express();
app.locals.moment = require('moment');

let mongoose = require('mongoose');
let DB_URL = 'mongodb://blog_end_runner:blog_end_runner39108@127.0.0.1:19999/vueBlog';

if(env === 'development') {
  DB_URL = 'mongodb://localhost/vueBlog'
}
// 连接数据库
mongoose.connect(DB_URL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('db service connected.')
});

// 使用art-template
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));

// session本地持久化处理
app.use(session({
  secret: 'blog',
    resave: true,
    saveUninitialized: false,
  store: new MongoStore({
    url: DB_URL
  })
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,params");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    next();
});

// let index = require('./routes/index');
// let user = require('./routes/user');

// app.use('/', index);
// app.use('/article', require('./routes/article'));
// app.use('/uploadImg', require('./routes/uploadImg'));
// app.use('/user', user);

let routes = require('./routes/router');
routes(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  if(err) err.status = 200;
  res.status(err.status || 500);
  res.send({code: -1,err});
});

module.exports = app;


