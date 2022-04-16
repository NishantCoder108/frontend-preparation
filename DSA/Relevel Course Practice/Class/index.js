/*
class Rectangel{
    constructor(_width,_height,_color){
        this.width =_width;
        this.height = _height;
        this.color=_color
    }

    //method
    getArea(){
        return this.width * this.height;
    }


    printDescription(desc){
        console.log(` I am a ractagle of ${this.width} X ${this.height} and color of ${this.color} and extara add ${desc}`)
    }
}

let reactagle1 = new Rectangel(5,4,"white")
console.log(reactagle1)
console.log(reactagle1.getArea())
console.log(reactagle1.printDescription("Ketu"))

let reactagle2= new Rectangel(3,2,"red")
console.log(reactagle2)
console.log(reactagle2.getArea())
console.log(reactagle2.printDescription("Nishant"))






class Square {
    // setup

    constructor(_width){

        //instance properties
        this.width =_width;
        this.height=_width;
    }


    //methods
    //getter and setter
    get area(){
        return this.width * this.height;
    }


    //set method
    set area(area){
        this.width = Math.sqrt(area)
        this.height = this.width;
    }


}

//create an instance
let square1 = new Square(4);
console.log(square1)
// console.log(square1.area)

square1.area = 9;
console.log(square1.width)
console.log(square1)









//Static Methods

class Square{
    constructor(_width){
        //properties
        this.width = _width
        this.height = _width

    }

    //methods
    static equals (s1,s2){

        return s1.width * s1.height ===  s2.width * s2.height
    }

}

//instance
let square1 = new Square(8)
let square2 = new Square(9)


//we call the class of equals

console.log(Square.equals(square1,square2)) 



// Inherited , Inheritance

class Person {
  //properties
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  //methods

  describe() {
    console.log(`I am ${this.name} ,My age is ${this.age}`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExp) {
    //properties
     super(_name, _age);
    //custom behaviour
     this.yearsOfExp = _yearsOfExp;


  }

  //methods
  code(){
      console.log(`${this.name}, is now coding`)
  }
}

let person1 = new Person("John", 40);
let person2 = new Programmer("John", 30, 10);

// console.log(person1)
// console.log(person2)

// person2.code()
// person2.describe()


const programmers =[
    new Programmer("john",20,15),
    new Programmer("Jeff",21,45)
]

function developerSoftware(programmers){
    for(let programmer of programmers){
        programmer.code()
    }
}

developerSoftware(programmers)





//Polymorphism
class Animal{
    constructor(_name){
        //properties
        this.name = _name;

    }

    //methods
    makeSound(){
        console.log("Generic Sound")
    }
}


class Dog extends Animal {
    constructor(name){
        //properties
        super(name)
    }

    //methods
    makeSound(){
        console.log("woof woof")
    }
}
const a = new Animal('Tom')
const d = new Dog('Johe')

a.makeSound()
d.makeSound()





//______Prototype

let arr = [1,2]
 */
let obj ={
    name :"John"
    ,age:20
}

function x(){

}






//Optimisastion Issues

let obj2 ={
    name:"Ram"
};

obj2._proto_ = obj;

console.log(obj2.age)
console.log(obj2)