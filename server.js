var express = require('express');
var server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/scripts', express.static(__dirname + '/scripts'));
server.use('/css', express.static(__dirname + '/css'));
server.use(express.static(__dirname));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
server.use(allowCrossDomain);

server.listen(3001, function () {
    console.log('Listening on port 3001');
});