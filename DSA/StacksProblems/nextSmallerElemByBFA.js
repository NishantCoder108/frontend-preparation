//We are finding next smaller element by Brute Force Approach

function nextSmallerElemByBFA(arr) {
  let finalArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i === arr.length - 1) {
      finalArr[i] = -1;
    } else if (arr[i + 1] < arr[i]) {
      finalArr[i] = arr[i + 1];
    } else {
      let j = i;
      while (j < arr.length - 1 && arr[j + 1] > arr[j]) {
        j++;
      }

      if (j == arr.length - 1) {
        finalArr[i] = -1;
      } else {
        finalArr[i] = arr[j + 1];
      }
    }
  }
  return finalArr;
}

console.log(nextSmallerElemByBFA([5, 2, 1, 6, 5]));



/*
Alert : It will not pass all test cased , we are iterating of while loop , j , but we are not removing greater element , so when it will go next step ,it compare with next j+1 ,so it will show wrong.
e.g.  
 
input: [5, 2, 1, 6, 5]
output: [ 2, 1, 5, 5, -1 ]

expected : [2,1,-1,5,-1]


so you will not use this brute force for these type of problems. 

*/