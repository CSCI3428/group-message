var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res) {
console.log(req.url);
res.writeHead(200, {'Content-Type' : 'text/html'});
var stream = fs.createReadStream(__dirname + '/frontPage.html', 'utf8');
stream.pipe(res);
});

server.listen(3001, function () {
    console.log('Listening on port 3001');
});