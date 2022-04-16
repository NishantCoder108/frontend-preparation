/*Given an array of n elements ,Find all Even and Odd Number from an array */

let arr = [5, 51, 36, 2, 5, 8];

function checkNum(arr, func) {
  let arr1 = arr.filter(func);
  console.log(arr1);
}

function oddNum(num) {
  return num % 2;
}

function evenNum(num) {
  return num % 2 === 0;
}

checkNum(arr, evenNum);//[ 36, 2, 8 ]
checkNum(arr, oddNum);//[ 5, 51, 5 ]
