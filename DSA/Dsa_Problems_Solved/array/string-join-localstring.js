/**
 * toString() , Join() , toLocalString() Method
 */
let arr = [1, 4, 7, 6, 7, 4, 8, 7];
console.log(arr);
console.log(arr.join("-"));
console.log("Number", arr.join(","));
console.log(arr.toString()); //1,4,7,6,7,4,8,7

//type 2 : toLocalString()
console.log(
  arr.toLocaleString("en-US", { style: "currency", currency: "USD" }) //$1.00,$4.00,$7.00,$6.00,$7.00,$4.00,$8.00,$7.00
);
console.log(
  arr.toLocaleString("en-IN", { style: "currency", currency: "INR" })
); //₹1.00,₹4.00,₹7.00,₹6.00,₹7.00,₹4.00,₹8.00,₹7.00

//join() method
let names = ["ram ", "shyam", "mohan", "rohan", "gandhi"];
console.log(names.join("-")); //ram -shyam-mohan-rohan-gandhi

//toLocaleString is mostly used in date
let newDate = new Date().toLocaleString();
newDate = new Date().toLocaleTimeString();
console.log(newDate);
