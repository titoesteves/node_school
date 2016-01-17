var result = 0;

process.argv.forEach(function(item, index){
  if(index > 1) {
    result += Number(item)
  }
})
console.log(result);
