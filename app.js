
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var math = require('./lib/math');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/qunit', routes.qunit);
app.get('/users', user.list);

//Let's experiment!

app.get('/1', function(req, res){
if(math.add(1,1) == 3)
  res.send('!!!');
else
  res.send('???');
});

app.get('/add', function(req, res){
  //localhost:3000/letsadd?num1=1&num2=1
  var num1 = parseInt(req.query.num1,10);
  var num2 = parseInt(req.query.num2,10);

  var sum = math.add(num1,num2);

  console.log(sum);
  res.send(sum.toString());

});

app.get('/subtract', function(req, res){
  //localhost:3000/letsadd?num1=1&num2=1
  var num1 = parseInt(req.query.num1,10);
  var num2 = parseInt(req.query.num2,10);

  var sum = math.subtract(num1,num2);

  console.log(sum);
  res.send(sum.toString());

});

app.get('/multiply', function(req, res){
  //localhost:3000/letsadd?num1=1&num2=1
  var num1 = parseInt(req.query.num1,10);
  var num2 = parseInt(req.query.num2,10);

  var sum = math.multiply(num1,num2);

  console.log(sum);
  res.send(sum.toString());

});

app.get('/divide', function(req, res){
  //localhost:3000/letsadd?num1=1&num2=1
  var num1 = parseInt(req.query.num1,10);
  var num2 = parseInt(req.query.num2,10);

  var sum = math.divide(num1,num2);

  console.log(sum);
  res.send(sum.toString());

});


app.get('/test', function(req, res){
  //localhost:3000/test
  var a = req.query.a;

  console.log(a);
  res.send(a);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
