// console.log(process.argv[2])
var fs = require('fs');

var test = fs.readFileSync(process.argv[2])
var arr = test.toString().split('\n')
console.log(arr.length - 1)

