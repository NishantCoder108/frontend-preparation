/* targetSum = 20; 
   arr = [2,4,1,4,16,2,19]

   find pair of summation 
   e.g. 1,19

*/

//First Approach
let arr = [2, 4, 1, 4, 10, 10, 16, 2, 19];
let targetedSum = 20;

function pairSum(arr, targetedSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; i++) {
      let firstNum = arr[i];
      console.log(firstNum);
      let secondNum = arr[j];
      console.log(secondNum);
      if (firstNum + secondNum === targetedSum) {
       return( arr[i], arr[j]);
      }
    }
  }
}

console.log(pairSum(arr, targetedSum));
//dtj
