var readir = require('./exercise6');

var dirName = process.argv[2];
var ext = process.argv[3];
readir(dirName, ext, function(err, data){
  if(err) {
    console.log(err);
    return;
  }
  data.forEach(function(file){
    console.log(file);
  });
});