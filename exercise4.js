var fs = require('fs');

function callback (err, data){
  var lines = data.split('\n');
  console.log(lines.length - 1);
}
fs.readFile(process.argv[2], 'utf-8', callback);