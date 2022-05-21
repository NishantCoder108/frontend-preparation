/*
"use strict";
console.log(this); //it will show window but in case of strict ,if we write in function they will show undefined

function logThis() {
  console.log(this);
}
logThis();

*/

// this in event listener
/*
const button = document.querySelector('button')
button.addEventListener('click', thisLog)

function thisLog(){
    console.log(this)   //<button>Click Me</button>  this is the show in console
}
*/



// this in object
/*
function thisLog(){
    console.log(this)}

let obj = {
    num:10,
    thisLog
}
obj.thisLog();

*/



//this  in Aerrow function
/*
'use strict'
const logThis= () =>{
    console.log(this)

}
logThis()  //here is nothing change ,just window show...
*/

/*

'use strict'
function logThis(){
    console.log(this)

}
logThis()
*/


//______________________________________
//this in array function
'use strict';

[24,5,566,7,7].forEach(function(num){
    console.log(this)//all window object will show but when we give use strict mode then undefined show But in case of aerrow function window object will show
    console.log(num)
},{num :10})