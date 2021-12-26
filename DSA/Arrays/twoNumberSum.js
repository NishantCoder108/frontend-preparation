let array = [3, 5, -4, 8, 11, 1, -1, 6, 4];
let targetSum = 10;

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   for (i = 0; i < array.length - 1; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }

//   return [];
// }

// Do not edit the line below.
console.log(twoNumberSum(array, targetSum));

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a-b);
  console.log(array);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
    
  }
  return [];
}
