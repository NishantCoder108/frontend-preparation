**MOST IMPORTANT TOPICS**

 * Aerrow Fucntion
 * Function
 * Var and Const and let
 * Objects
 * Array - Map ,Filter ,Reduce ,forEach
 * Closures
 * Higher Order Fuction
 * Classes
 * Prototypal Inheritance
 * Hoisting

 ***Aerrow Function***
0) function func(){}
1) function func(){
    return something;
}
2) let func = () =>{
     return something;
    }
3) let fucn = function(){
     return something;
    }
4)let func = data => data_return_in_one_line;
5)let func = (paraA,paraB) => paraA + paraB;
   e.g.  let sum = (a,b) => a + b;//it return value 
         console.log(sum(2,4)) 


***Function***
pure function = they will return ,same value ,they will not change

impure function = it can be change or will not return same value.

function sum (a,b){
    let c = a+ b;
    console.log(c) //it return the constant value
}

let d = 2;
function impure(a,d){
    let sum = a + d;
    console.log(sum)
}
impure(4); //this is impure because of d variable value is outside from func


***Var and Const and let***

1)var variable is global scope ,it is mainly used but it is not recommended.
    In this case ,we can declare and also we intialize after , it's reference will change .
2) const variable ,we can only do in one line . Declaration and initialization in one line 
   e.g. const  constant = 3;
                 ___we can't redeclare ,or initialization. 

3) let variable , in let variable , we can't initialize before declaration.
             we can redeclare .
             e.g.    let a = 24;
                        a = 54;
                        console.log(a) //it's value change into 54. 
                        Actually it store the reference .




***Objects***
let obj = {
    name : 'Nishant',
    branch: "Civil",
    roll: "1324",
}

console.log(obj);// it will show in console

//we can create new obj e.g.
  let newObj = new Object(); //it will create empty object
       newObj.newKey = 'Value';

//it will added to new obj to add 

let emptyObj= {};



****Array - Map ,Filter ,Reduce ,forEach***

let arr= []; //it will create empty array 

//Method :- Push , pop, shift ,unshift ,splice(it can be remove or we can also add with split method) ,split(it will splited to empty spaces ,or we can also with , i.e.comma) , slice , substring ,substr.

l) Map function :- it will help into the mapping the element.
2) Filter : - it will help to filtering the element.
3)Reduce     : - it will reduce.
4)forEach  :-it iterate all element .


***Closures***
A closure  is the combination of a function bundled together with reference to the lexical environment.


let closure = function(){
    var a = 21;
    function j(){
        var b  = 30;
        function k(){
            var c = 90;

            console.log(a, b, c)
        }
        k();
    }
    j();
}
closure();   // it is invoking the function


Closure is used in ***Currying***


   function j (a){
       return function(b){
           return function(c){
               return function(d){
                   return function(e){
                               return (a + b + c + d);
                   }
               }
           }
       }
   }


let sum = j(3)(3)(4)(8)(9);
console.log(sum);



***Higher Order Fuction***

e.g. sort , map ,filter ,reduce ,forEach  function

A function which inside the another function and return function itself. this is called higher-order-function.


Callback Function :- When a function which is passed into the higher order function called callback function.

e.g. 
    function passFunc(){
        console.log("This is Passed Function");

        return function(){
            console.log("I am Return Function");
        }
    }

    var a = passFunc()();//we invoke double then function inside function ,will be invoked .
    console.log(a)
//     console.log(a())    



***Classes***
We can create blue print of objects .In other words ,basic things that are same in all , we can made this type. e.g. model , companyName etc.

--> we can also create method 

class Person{
    constructor(name, codingLanguage, expertise){       //this is constructor
        this.name = name;
        this.codingLanguage = codingLanguage;
        this.expertise = expertise;
    }


    webProject(){                      //this is method 
        console.log("Web Project is completed with " , this.codingLanguage ,'language')
    }
}

let person = new Person('Nishant Kumar' ,'JavaScript', 'React js');

console.log('Person"s attribute in Constructor ',person);
person.webProject();         //this is method


***Prototypal Inheritance***

Prototypal Heritance is where  objects to heriting property and methods  from the proto which is pointing to that object

const father ={
    name: 'Mahatama Gandhi'

}

const child = {
    cName : "Rahul Gandhi",

}

child.__proto__ =father;
console.log(child.name)


***Hoisting***
Hoisting is the phenomena by which we can access even before initialize it . It only happens in Var variable. It can't be in case of let or cosnt variable.


Temporal Dead Zone :- when we access , before initialization ,in case of let or const , that become in temporal dead zone. we can't access it.

