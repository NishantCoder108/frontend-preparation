/* takes other function as arguments or
they can return function */

let side = [1,2,3,4,5]
/*
const areaSqare =(side) =>{
    let res = [];
    for(let i=0;i<side.length; i++){
        res.push(side[i]* side[i])
    }

    return res
}
console.log(areaSqare(side))

//perimeter of square

const perimeterSquare = ()=>{
    let res = [];
    for(let i=0;i<side.length; i++){
        res.push(side[i]* 4)
    }
    return res
}
console.log(perimeterSquare(side))


//diagonal
const diagonalSquare=()=>{
    let res = [];
    for(let i=0;i<side.length; i++){
        res.push(Math.sqrt(2) * side[i])
    }
    return res
}
console.log(diagonalSquare(side))
*/

/**By Higher Order Function */
/*
function calculate(func,side){
let res=[]
    for(let i=0; i<side.length;i++){
res.push(func(side[i]))

    }
    return res;
}

function area(a){

    return a * a;
}

function perimeter(a){
    return 4 *a
}

function diagonal(a){
    return Math.SQRT2 * a
}
console.log(calculate(area,side))
console.log(calculate(perimeter,side))
console.log(calculate(diagonal,side))

// by hof
console.log('hof',side.map(area))




//Closures
// function  x(){
//     var a =20;
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x();


function  x(){
    var a =20;
   
   return function y(){
        console.log(a)
    }
    
}
var z = x()

console.log(z)

z()

*/

function y1(){

    for(var i = 1; i<=9 ;i++){
console.log(i)
        setTimeout(() =>{
console.log(i)
        },1000)
    }
    console.log("everyone")
}

y1()