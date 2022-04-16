/*Given an array of n elements ,Delete a number from any given position in an array  */

let arr = [5, 51, 36, 2, 5, 8];
let numPos = 3;

function deleteNum(arr, numPos) {
  arr.splice(numPos - 1, 1);
  console.log(arr);
}

deleteNum(arr, numPos);
