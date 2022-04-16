//1. This is os ,you can see here.
console.log("hello Nishant");
let os =require('os');
console.log('Os Platform:' , os.platform());


//readline function ,you can read whats input here
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('index.html')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});