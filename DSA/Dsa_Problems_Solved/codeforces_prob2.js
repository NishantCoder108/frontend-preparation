"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");


function print(x) {
  
  console.log(x);
}


let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  console.log('inputString :',inputString)
  main();
});


function readline(){
  console.log("readline:", currentLine);
  return inputString[currentLine++];
}

function main(){
  
var input =readline(); //10 23 56
console.log("input :", input)
var a = input.split(' ').map(x =>{ 
  console.log('x is :',x);
  console.log("+x is :",+x)
  return x
  }).sort((a,b) => b -a);

console.log('a is :', a);
print(a[0] + " eh o majo");
print(a[1] + " eh o majo");
print(a[2] + " eh o majo");


}
/*
STDIN
217 4 5 555

Output:

inputString : [ '217 4 5 555' ]
readline: 0
input : 217 4 5 555
x is : 217
+x is : 217
x is : 4
+x is : 4
x is : 5
+x is : 5
x is : 555
+x is : 555
a is : [ '555', '217', '5', '4' ]
555 eh o majo
217 eh o majo
5 eh o majo
*/