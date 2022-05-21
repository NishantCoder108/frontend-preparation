let arr = [];
 
function createTable(numRows, numColumns) {
 let numOfCells = numRows * numColumns;
 arr = Array(numOfCells)
   .fill(0)
   .map((el) => Math.ceil(Math.random() * numOfCells));
 
 let htmlString = "";
 for (let i = 0; i < numRows; i++) {
   htmlString += "<tr>";
   for (let j = 0; j < numColumns; j++) {
     htmlString += "<td>" + arr[i * numColumns + j] + "</td>";
   }
   htmlString += "</tr>";
 }
 
 return htmlString;
}
 
document.getElementById("tbody").innerHTML = createTable(20, 20);
 
const sortedEvenNumbers = arr
 .filter((el) => el % 2 === 0)
 .sort((a, b) => a - b);
document.getElementById("sorted").innerHTML = sortedEvenNumbers.toString();
 
// One funtion to get max or min of an array
 
function maxOrMinOfArray(arr, direction) {
 arr.sort((a, b) => (a - b) * direction);
 return arr[0];
}
 
console.log(maxOrMinOfArray(arr, 1));
console.log(maxOrMinOfArray(arr, -1));
 
function sumOrDiffOfNElements(arr, N, fn) {
 return arr.slice(0, N + 1).reduce(fn);
}
 
sumOrDiffOfNElements(arr, 15, (a, b) => a + b);
sumOrDiffOfNElements(arr, 15, (a, b) => a - b);
 
// reduce
 
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((prevValue, currentValue) => prevValue - currentValue);
 
// Reducer fn walks through the array element by element, at each step, it will add the current array value
// to the result from previous step
 
// previousValue = on first call, it will be arr[0]
// currentValue = on first call, it will be arr[1]
 
// let arr = ["a", "e", "i", "o", "u"];
// arr.reduce((a, b) => a + b);
 
// a e
// ae i
// aei o
// aeio u
// aeiou
 
[1, 3, 12, 11, 6, 7, 8].reduce((a, b) => Math.max(a, b));
 
// prev = 1, curr = 3
// prev = 3, curr = 12
// prev = 12, curr = 11
// prev = 12, curr = 6
// prev = 12, curr = 7
// prev  =12, curr = 8
// 12
 
let personObj = [
 {
   name: "Atif",
   numberOfWives: 13,
 },
 {
   name: "Prateek",
   numberOfWives: 5,
 },
 {
   name: "Mrigank",
   numberOfWives: 1,
 },
 {
   name: "Sumit",
   numberOfWives: -1,
 },
 {
   name: "Usman",
   numberOfWives: 55,
 },
];
 
const totalWives = personObj.reduce((prevValue, currentValue) => ({
 numberOfWives: prevValue.numberOfWives + currentValue.numberOfWives,
}));
 
console.log(totalWives);

