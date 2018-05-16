var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.write(JSON.stringify(req));
    res.write("Hello");
    res.write(JSON.stringify(req.headers));
    res.end();
}).listen(60000);
console.log("server open");