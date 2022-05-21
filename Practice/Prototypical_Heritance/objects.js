/*Objects
1. Objects key can be redeclared
2.All data for phone is together
3.All phones should have common attributes nad behaviour


*/

var phone = {
  name: "Iphone",
  model: "10",
  powerON: function () {//it is method
    //method of behaviour
    console.log("Powering On" + this.name);
  },
  switchOff: function () {},
  activateSiri: function () {},
  dialNumber: function () {},
};

phone.powerON();
/**
 Classes

 WHY do you need to understand aout class?

 I want to be able to crete multiple phones ,but all phones should have basic structure.

 2015 onwards, there is a concept of class in js , but it is dummy concept


 Class name should always begin with uppercase
 */

class Phone {
  //Inside we can construct all types of properties

  constructor(name, color, model, price) {
    //this is assign attribute
    this.name = name;
    this.color = color;
    this.model = model;
    this.price = price;
  }

  powerOn() {
    //outside the constructor
    console.log("power on");
  }

  switchOff() {
    //This is all method
    console.log("Switch Off");
  }
  //If it is a sumsung phone googel voice is acivated
  acitvateVoiceAssistant() {
    if (this.name == "samsung") {
      console.log("Samsung voice assistant activated");
    } else if (this.name === "Apple") {
      console.log("Siri is activated");
    } else {
      console.log("Voice Assistant is activated");
    }
    console.log("Voice assistant Acitvated");
  }

  dialNumber(number) {
    console.log("Seeing an Alarm" + number +"from" + this.name +"Phone");
  }
}
/*
    A class is a blueprint for creating objects.

    Empty objects is created  ={}
    Inside the class , this = {}
    {name :"Samsung",color:"red"}

*/
let samsungPhone = new Phone("Sumsung", "Red", "GAlaxy S20", 35000);
samsungPhone.acitvateVoiceAssistant();
samsungPhone.dialNumber(2525299);


let applePhone = new Phone("Apple", "Green", "13", 50895);
console.log(applePhone); //All components will show ,with the help of new keyword
applePhone.acitvateVoiceAssistant(); //apple phone activate assistant


phone.acitvateVoiceAssistant();
//when you pass as a parmeter, that comes in constractor and created at

let obj = {};
obj.name = "Samsung"; //obj ={name :Samsung}
//





//____________
/**
 * Inside a function (not method) this refers -window
 * Inside a method , this refers to the owner of method object
 */

var a = this;
function test(){
console.log(this)
}
test();




// If a function exists inside an object, it is called a method

var car = {
    name: "City", // attributes
    color: "Red", // attributes
    startCar: function () {
      // methods or behaviour
      console.log("Car started");
    },
    stopCar: function () {
      // methods or behaviour
      console.log("Car stopped");
    },
  };
  