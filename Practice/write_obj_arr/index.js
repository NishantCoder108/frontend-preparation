//Create Arrays inside Objects

const arrInsideObj = {
  firstName: "Nishant",
  lastName: "Kumar",
  fullName: ["Nishant", "Kumar", "Civil", false, undefined, null, "Elon Musk"],
};

//Create Objects inside Objects
const objInsideObj = {
  fruit: "Mango",
  obj: {
    name: "Nishant Kumar",
    branch: "Civil",
    Undefine: undefined,
    Null: null,
    Boolean: Boolean,
  },
};


//Create Objects inside arrays
const objInsideArr = [
  "Mango",
  "Guava",
  "Orange",
  {
    name: "Nishant Kumar",
    branch: "Civil",
    Undefine: undefined,
    Null: null,
    Boolean: Boolean,
  },
];



console.log('arrInsideObj :-',arrInsideObj)
console.log('objInsideObj :-',objInsideObj)
console.log('objInsideArr :-',objInsideArr)