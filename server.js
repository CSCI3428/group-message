//hi, I don't know what this code does (joking, just declaring variables and stuff)
var express = require('express');
var mongodb = require('mongodb');
var server = express();
var globalDB;


var user;
var password;
var host = '127.0.0.1'; //not sure if this is correct
var port; //need to find out which we can use... I think, I'm just winging it here
var database;
var connectionString = 'mongodb://'+ user +':'+ password +'@127.0.0.1:27017/'+
        database;

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

erver.use(allowCrossDomain);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/scripts', express.static(__dirname + '/scripts'));
server.use('/css', express.static(__dirname + '/css'));
server.use(express.static(__dirname));

