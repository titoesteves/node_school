var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback){
  var result = [];
  fs.readdir(dirName, function(err, files){
    if(err) {
      return callback(err);
    }
    files.forEach(function(file){
      if(path.extname(file) === '.' + ext){
        result.push(file);
      }
    });
    return callback(null, result);
  });
};