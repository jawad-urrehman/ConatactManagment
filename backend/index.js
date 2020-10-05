var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var routes = require('../backend/routes/routes');

var app= express();

mongoose.connect('mongodb://localhost:27017/contactManagment', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',function(){
    console.log("mongoDb connected")
});

mongoose.connection.on('error',function(err){
    if(err)
    console.log("error Connection",err)
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.use(cors());

app.use('/',routes);

app.use(express.static(path.join(__dirname)));

app.listen(5000,function(){
    console.log("listening at 5000")
});