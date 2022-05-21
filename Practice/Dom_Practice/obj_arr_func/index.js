// map

// 1. returns an array
// 2. it takes a function (callback) which is executed for every element of the array, and the result of the function is added to the resulting array.

var numArray = [1, 2, 3, 4, 5];
var result = numArray.map((num) => num * num);
console.log(result);

result = numArray.filter((num) => num > 3);
console.log(result);

result.forEach((num) => console.log(num));

var obj = {
  name1: "Mrigank",
  age: 13,
  address: {
    city: "Kolkata",
  },
};

obj.gender = "Male";

console.log(obj.name1);
console.log(obj["name"]);

//Instead of writing these
// var name = obj.name;
// var age = obj.age;

//We can use destructuring
var {age ,name1  } = obj;

console.log('Name: ',name1)
function sum(a, b) {
  return a + b;
}

var sum = function (a, b) {
  return a + b;
};

var sum = (a, b) => a + b;

var result = sum(1, 3);
