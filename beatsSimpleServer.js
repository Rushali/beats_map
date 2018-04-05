var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');

httpServer.listen(7000);

function requestHandler(req, res) {

  var parsedUrl = url.parse(req.url);
  parsedUrl.pathname = parsedUrl.pathname=="/"?"/index.html":parsedUrl.pathname;
  console.log("The Request is: " + parsedUrl.pathname);
	

  fs.readFile(__dirname + parsedUrl.pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + parsedUrl.pathname);
      }
      res.writeHead(200);
      res.end(data);
      }
    );
}
