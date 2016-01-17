var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var fileExt = process.argv[3];
fs.readdir(dirName, function(err, list){
  list.forEach(function(fileName){
    // console.log('path.extname(fileName)', path.extname(fileName))
    // console.log('fileExt', fileExt)
    if(path.extname(fileName) === '.' + fileExt) {
      console.log(fileName)
    }
  });
});