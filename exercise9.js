var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var result = [];

http.get(url1, function(response){
  var str = ''
  response.on('data', function(data){
    str += data.toString();
  })
  response.on('end', function(){
    console.log(str);
    http.get(url2, function(response){
      var str2 = '';
      response.on('data', function(data){
        str2 += data.toString();
      })
      response.on('end', function(){
        console.log(str2);
        http.get(url3, function(response){
          var str3 = '';
          response.on('data', function(data){
            str3 += data.toString();
          })
          response.on('end', function(){
            console.log(str3)
          })
        })
      })
    });
  })
});
