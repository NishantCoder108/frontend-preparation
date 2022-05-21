/**
 * fill() method in array
 * from() method in array
 */
//type 1
let arr1 = new Array(2, 4, 5, 2, 4);
console.log(arr1, arr1.length);

//type 2
let arr2 = [3, 2, 5, 5, 3, 5];
console.log(arr2, arr2.length);

//type 3
let arr3 = Array(34);
console.log(arr3, arr3.length);

//type 4
let arr4 = Array(4, 5, 2, 6, 6, "amit", "nishant", "elon", "javascript", 3, 6);
console.log(arr4, arr4.length);

//type 5
let arr5 = [4];
console.log(arr5, arr5.length);

//type 6
let arr6 = new Array(4); // [ <4 empty items> ] 4   , will save
console.log(arr6, arr6.length);

// when we write , new Array(n) or Array(n) , both save a empty number or empty items

//type 7
let arr7 = new Array(4, 6);
console.log(arr7, arr7.length);

//type 8
//Fill array method in ds
//e.g. 1
let arr8 = Array(3).fill(3);
console.log(arr8, arr8.length);

//e.g. 2
let arr8a = new Array(4).fill(99);
console.log(arr8a, arr8a.length);

//e.g. 3
let arr8b = Array().fill(3);
console.log(arr8b, arr8b.length); //no length , [] 0

//e.g. 4
let arr8c = [45].fill(4);
console.log(arr8c, arr8c.length); //fill other number but it will send same number ,   [ 4 ] 1

//e.g. 5
let arr8d = ["x", "x", "x"].fill(3);
console.log(arr8d, arr8d.length);

//e.g. 6
let arr8e = [
  [3, 4, 64, 3, 2, 5],
  [3, 4, 6, 7, 8],
  [3, 2, 5, 7, 8, 8, 6],
];
console.log(arr8e, arr8e[0].length);

//e.g. 7
let arr8f = [
  [3, 4, 6, 3, 2],
  [3, 4, 6, 7, 8],
  [3, 2, 5, 7, 8],
].fill([0], 345); // fill method in array will not work inside the array inside ,within.
console.log(arr8f, arr8f.length);
//fill(x) , when we want to write same thing , so for that ,we use fill method in javascript

//------------Form method in Array----------------------
//type 1

let arrf = Array("string");
console.log(arrf, arrf.length);

//type 2
let arrf2 = Array.from("Nishant Kumar");

console.log(arrf2, arrf2.length); /**[
    'N', 'i', 's', 'h',
    'a', 'n', 't', ' ',
    'K', 'u', 'm', 'a',
    'r'
  ] 13 */

//type 3
let i = 1;
let arrf3 = Array.from({ length: 13 }, (_, i) => i + 11);
console.log(arrf3); /**It just iterating all elements e.g. [
    11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22,
    23
  ]  */
