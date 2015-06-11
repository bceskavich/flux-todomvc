var path = require('path');
var Express = require('express');

var app = Express();
var server;

var CSS_PATH = path.resolve(__dirname, './client/css');
var DIST_PATH = path.resolve(__dirname, './build');

app.use('/css', Express.static(CSS_PATH));
app.use(Express.static(DIST_PATH));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, './client/index.html'));
});

server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
