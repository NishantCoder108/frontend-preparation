let obj ={};
//This is not recommend way.
obj.__proto__.newMethod = function(){  //we can create method just like , method 
    console.log("TEst")
}

let arr = [1,3,4,56.5]

arr.newMethod();



class Phone {
    constructor(id, name, color, model, price) {
      this.id = id;
      this.name = name;
      this.color = color;
      this.model = model;
      this.price = price;
    }
  
    powerOn() {
      console.log("Power on");
    }
  
    switchOff() {
      console.log("Switch off");
    }
  
    activateVoiceAssistant() {
      if (this.name === "Samsung") {
        console.log("Samsung voice assistant activated");
      } else if (this.name === "Apple") {
        console.log("Siri activated");
      } else {
        console.log("Voice assistant activated");
      }
    }
  
    dialANumber(number) {
      console.log("Dialling  " + number + " from " + this.name + " phone");
    }
  
    setAnAlarm() {
      console.log("Seeting an alarm");
    }
  }
  
  // empty object is created = {}
  // Inside the class, this = {}
  // this obj will be returned
  // {name: "Samsung", color: "Red", model: "Galaxy S20", price: 35000}
  
  let samsungPhone = new Phone(1, "Samsung", "Red", "Galaxy S20", 35000);
  samsungPhone.activateVoiceAssistant();
  samsungPhone.dialANumber(123456789);
  
  let applePhone = new Phone(2, "Apple", "Green", "13", 50000);
  applePhone.activateVoiceAssistant();
  applePhone.dialANumber(987654321);
  


/**
 * 
 * 
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
 */


 console.log("Hello Constructor");

 class Person{
     constructor(id,name,branch){
         this.ids= id;
         this.names =name;
         this.branch= branch;
 
     }
 
     fighting(){
         console.log("I am ready for Fight")
     }
 }
 
 let person = new Person(2,"Nishant Kumar","civil");
 console.log(person);
 person.fighting();//this is method of person