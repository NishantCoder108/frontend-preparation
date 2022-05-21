//Hoisting
//When variables are declared with var , their declaration is hoisted to the top of the variable scope.
//Hoisting is 


//var a ;  👉declaration
//a = 10 ;  👉initialization


// console.log(x)

//varibles 
function test(){
   console.log(x)
   var a = 10;
   if(a > 5){
       var x = 10;
   }
}

test();

//Issues with declaring variables with var
//1. It can be redeclared , it can lead to conflicts if we have multiple of js files
//2. Hoisting happens at global or function scope leading to  unexcepted outpur\t
  

//ES6 / ESC 2015 ---let and const
//1. They cannot be redeclared
//2.let and const variables are not hoisted

let a = 15;
a = 20;

//let - can't redeclare but reassign

//cosnt  -can't redclare and can't reassign


var sum = (a,b) => a+ b;
var sum = 10;

//function must be in const variable
