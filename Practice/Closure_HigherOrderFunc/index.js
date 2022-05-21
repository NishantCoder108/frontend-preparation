//create my array of 150 random numbers
/*
let myArray = [];




//Here we use for loop for filling the myArray so we can use map function .
for (let i = 0; i < 150; i++) {    
//   myArray[i] = i;   👉👉👉here sequence increase

myArray[i]=Math.ceil(Math.random() * 150);   
  //👉👉math.random gives number b\w 0 and 1 
  //👉👉math.ceil gives number  floor value
  //👉👉 if i want more than 11 so just add 11 e.g.(11+Math.ceil(Math.random() * 150)); 
 
}
*/
/**
0.1  => Math.floor(0.1) => 0   👉Some 1point more,so down
0.1  => Math.ceil(0.1)  => 1👉Some 1point more ,so upp

Math.floor(0 - 149.9999999) => [0,149]its range
Math.ceil([0 - 149.999999]) => [0 , 150] 👉it start with 0,so it started with 0
 */
//[0,1,2,3,4.....149]

function createTable(arr) {
  var count = 0;
  var rows = "<tr>";

  //<tr>
  //  <td>0</td>
  //  <td>1</td>
  //  <td>2</td>
  //  .
  //  .
  //  <td>14</td>
  //</tr>
  //<tr>
  //   <td>15</td>
  //   <td>16</td>
  //   .
  //   <td>29</td>
  //</tr>
  //<tr>      ____if just like it never close when array length will 12 ,so how fix this , we use arr.length
  for (var i = 0; i < arr.length; i++) {
    rows += "<td>"+arr[i] + "</td>";
    count++;
    //if it reached at last to we can add tr closing tag
    /*
  if(i ===arr.length-1){
        rows +="</tr>";
        break;
    }
 */
    if (count === 15) {
      count = 0;
      rows += "</tr><tr>";
    }
  }

  return rows;
}

let myArray =new Array(150) //one line new array formed
      .fill(0)
      .map(() => Math.ceil(Math.random() * 150))


//      
document.getElementById("tbody").innerHTML = createTable(myArray);






//****Higher Order Function***

var a = 10;
var b = 20;

function sum(a,b){
    return a+b;

}

function difference(a,b){
    return a -b;
}



function calculate(a,b,fn){
    return fn(a,b);
}


var sum = calculate(10,20,function(c,d){
  return c+d;
})

var diff = calculate(10,20, function(c,d){
    return c - d;
});

// var product = calculate(10,20 ,function(c,d){
//     return c * d
// })
// or 
var product = calculate(10,20 ,(c,d) =>c * d);



//***********Interview Perspective***** */

// Closure
//Variables
//Hoisting


var x = 10;
function print(){
    console.log(x)
}


//In javascript , variables can be created at two places

//Global Scope - A variable declared outside a funtion becomes global 
//It can be accessed anywhere in the code 

var  x = 10;
function test(){
 
    var y = x +10;
     
    if(x > 10){
        x = x -2;
    }
}




//Local Scope
//Function scope and block scope---> when declared in fucntion ,they can't be accessed outside from function

console.log(z) //it will give error

function print(){
    var z =20;

    if(z> 20){
        z = z + 2
    }
}


//
var greet = (name2) =>{
    console.log(name2)
}

greet('Nishant Kumar')


//Hoisting


var test = function (){
    var x = 3;
    ++x;
    console.log(x)
}
