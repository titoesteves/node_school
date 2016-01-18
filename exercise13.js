var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  var parsed = url.parse(req.url, true);
  console.log(parsed)
  if(req.method === 'GET' && parsed.pathname === '/api/parsetime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var d = new Date(parsed.query.iso);
    var obj = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
    res.end(JSON.stringify(obj));
  }

  if(req.method === 'GET' && parsed.pathname === '/api/unixtime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var d = new Date(parsed.query.iso).getTime();
    res.end(JSON.stringify({unixtime: d}));
  }

})

server.listen(port);