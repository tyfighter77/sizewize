var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+ "./../public"));


var nodePort = 3000;

var mongoUri = "mongodb://localhost:27017/sizewize";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log("Successfully connected to mongodb");
});

app.post('/user', userCtrl.create);
app.get('/user', userCtrl.read);
app.put('/user/:id', userCtrl.update);
app.delete('/user/:id', userCtrl.delete);

app.post('/profile', profileCtrl.create);
app.get('/profile', profileCtrl.read);
app.put('/profile/:id', profileCtrl.update);
app.delete('/profile/:id', profileCtrl.delete);

app.listen(nodePort, function(){
  console.log("Now listening at port " + nodePort);
});
