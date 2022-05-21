//problem 1

function cube(x){
    var y = x*x*x;
    return y;
}

var z = cube(2);
console.log(z);



//problem 2

function printMsg(x){
    console.log(x);
    return x;
}

var z = printMsg('hello');
console.log(z)


//problem 3

function printValues(x){
    for(var i = 3; i<x ; i=i+2){
        console.log(i)
    }
}

printValues(10);