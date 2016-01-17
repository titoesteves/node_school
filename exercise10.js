var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
  var str = '';
    var date = new Date();
    str += date.getFullYear() + '-0';
    str += date.getMonth() + 1 + '-';
    str += date.getDate() + ' ';
    str += date.getHours() + ':';
    str += '0' + date.getMinutes() + '\n';
    
    // console.log(str);
  socket.write(str)
  socket.end();
});

server.listen(port);