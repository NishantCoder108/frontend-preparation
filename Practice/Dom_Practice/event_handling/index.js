/*function onClick(){
    console.log("Div is clicked")
}

document.getElementById('cell').addEventListener('click', onClick)



*/
/*
//Benefits of Aerrow Function

syntax can be concis.
In aerrow functin ,if there is only one statement one statement pass directly.

*/
var sum = (a,b)=>{
    return a+b ;
}

//or
var sum = (a,b) => a+ b;

var greet =(name)=>{
    return 'hello'+name;
}

// var result =sum(a,b);
// var text =greet(Nishant);

//second form

var test = function thirdForm(){
    //it is also write this type.
}


//Terniary Operator
function isEven(){
    if(num % 2 ===0){
        return true;
    } else{
        return false;
    }
    //return num % 2;  ---it is directly return boolean
}

//or

num % 2 ? true : false;  //Terniary Operator
var result = isEven(4);


//Day => Mon Tue Wed ----thats you return Gooday
//Question =>----easy  50 ==> moderate ===> difficult

function dicideDifficulty(numOfSolutions){
    if(numOfSolutions < 20){
        return "difficult"
    }
    else if(numOfSolutions < 50){
        return 'Moderate';
    }
    else return 'Easy'

    //return (num of solutions < 20) ? "difficult" : (numOfSolutions  < 50) ? "moderate " : 'easy')
}





//Functions   Objects => Objects     Arrays
//how much talent are
//How much skills are


var animalName = "Dog";
var aimalSound ='bark';
var numOfLegs = 4;
var isFriendly = true;
var color = 'green';
var hasTrunk =false;
var play =function (){
    console.log("Animal Is Playing")
}


var vehicleName ="city";
var vechicleModel ="Honda"
var vechicleModel;

//Lots of variables - possibility of names classhing with each other
//variables will overide each other
//Encapsulation


//Object = {}
var dog ={
    name :'dog:',
    numOfLegs:4,
    sound :'bark',
    isFriendly:true,
    color:'brown',
    hasTrunk:false,
    play :function(){
        console.log('Play')
    }
}
var cat ={
    name :'cat:',
    numOfLegs:4,
    sound :'meow',
    isFriendly:fale,
    color:'white',
    hasTrunk:false,
    play :function(){
        console.log('Play')
    }
}


var vehicle = {
    name :'city',

}

var elephant = {
    name :'elephant'
}



//Browser Console Application  e.g. Codepan 

var color =dog.color;
console.log(color);

color = dog['color'];
console.log(color)


//Destructin in objects
var obj = {
    name : 'Nishant',
    age:24
}

//destructuring
var {name ,age} = obj;

var obj1 ={
    male:'gender',
    female:'gender'
}
var { female ,male} = obj1;
console.log(male)