function selectionSort(array) {
  // Write your code here.
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;

    for (let i = startIdx + 1; i < array.length; i++) {
      console.log("Inside for loop , above if", i);

      if (array[smallestIdx] > array[i]) smallestIdx = i;//here it check smallest value ,if meet then they have smallestIdx and then return smallestIdx of smallest value.

      console.log("Inside for loop , below if", i);
    }
    console.log("smallestIdx here", smallestIdx);
    swap(startIdx, smallestIdx, array); //here , smallestIdx's value will swap to in sorted array (ascending order)
    startIdx++;
  }
  return array;
}
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
// Do not edit the line below.
exports.selectionSort = selectionSort;
const array = [8, 5, 2, 9, 5, 6, 3];
console.log(selectionSort(array));


/**
 * 
 RESULT:
 Inside for loop , above if 1
Inside for loop , below if 1
Inside for loop , above if 2
Inside for loop , below if 2
Inside for loop , above if 3
Inside for loop , below if 3
Inside for loop , above if 4
Inside for loop , below if 4
Inside for loop , above if 5
Inside for loop , below if 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 2
Inside for loop , above if 2
Inside for loop , below if 2
Inside for loop , above if 3
Inside for loop , below if 3
Inside for loop , above if 4
Inside for loop , below if 4
Inside for loop , above if 5
Inside for loop , below if 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 6
Inside for loop , above if 3
Inside for loop , below if 3
Inside for loop , above if 4
Inside for loop , below if 4
Inside for loop , above if 5
Inside for loop , below if 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 4
Inside for loop , above if 4
Inside for loop , below if 4
Inside for loop , above if 5
Inside for loop , below if 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 6
Inside for loop , above if 5
Inside for loop , below if 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 5
Inside for loop , above if 6
Inside for loop , below if 6
smallestIdx here 5
[
  2, 3, 5, 5,
  6, 8, 9
]
 */