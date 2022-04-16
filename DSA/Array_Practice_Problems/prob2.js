/* Given an array of n elements , insert a number to any random  position in array */

let arr = [5, 51, 36, 2, 5, 8];
let insertNum = 108;

const insertNumFunc = (arr, insertNum) => {
  let randomPos = Math.floor(Math.random() * arr.length); //Between 0 to arr.length
  arr.splice(randomPos, 0, insertNum);
  console.log(arr);
};


insertNumFunc(arr, insertNum);
