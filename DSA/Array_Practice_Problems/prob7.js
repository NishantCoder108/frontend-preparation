/*Given an array of n elements ,Move to all negative numbers one side of array */

let arr = [12,6,7,2,-2,-55,8,55,78,25,-5,-3,9];

function sortNum(arr){
 let sortArr=  arr.sort((a,b) => a-b)
 console.log(sortArr);
}

sortNum(arr);