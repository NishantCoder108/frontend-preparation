/* Given an array of n elements , Find the sum of elements of array */

let arr = [5, 51, 36, 2, 5, 8];

let reduceVal = arr.reduce((accumulator, currValue) => {
  return accumulator + currValue;
}, 0);

console.log(reduceVal);
