var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();
app.use(bodyParser.json());
app.use(cors());


var nodePort = 3000;

var mongoUri = "mongodb://localhost:27017/sizewize";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log("Successfully connected to mongodb");
});

//endpoints here

app.listen(nodePort, function(){
  console.log("Now listening at port " + nodePort);
});
