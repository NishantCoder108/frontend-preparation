// Quick Sort :-Time Complexity  O(Nlog(n))  | O(n^2)   Space Complexity :- O(log(n))
console.log("hello");
function quickSort(array) {
  quickSortHelper(array, 0, array.length-1);
  return array;
}

function quickSortHelper(arr, startIdx, endIdx) {
  if (startIdx >= endIdx) {
    return;
  }

  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(leftIdx, rightIdx, arr);
    }
    if (arr[leftIdx] <= arr[pivotIdx]) {
      leftIdx++;
    }
    if (arr[rightIdx] >= arr[pivotIdx]) {
      rightIdx--;
    }
  }

  swap(pivotIdx, rightIdx, arr);

  let subarrayIsSmaller = (rightIdx - 1 - startIdx) < (endIdx - (rightIdx + 1));

  if (subarrayIsSmaller) {
    quickSortHelper(arr, startIdx, rightIdx - 1);
    quickSortHelper(arr, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(arr, rightIdx + 1, endIdx);
    quickSortHelper(arr, startIdx, rightIdx - 1);
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log("hello");
console.log(quickSort([4, 2, 9, 5, 2, 1, 7, 4]));


//-----------Other Method of Solving Problems

   
// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function partition(arr, start, end){
//     let pivot = arr[start];
//     let smaller = start;
//     for(let i = start;i<end;i++){
//         if(arr[i] < pivot){
//             swap(arr,i,smaller);
//             smaller++;
//         }
//     }
//     swap(arr,end,smaller);
//     return smaller;
// }

// function quickSort(arr, start, end){

//     if(start >= end){
//         return;
//     }
//     let part = partition(arr, start, end);
//     quickSort(arr,start,part-1);
//     quickSort(arr,part+1,end);

// }


// let arr = [5,3,6,2,1,8,4];
// quickSort(arr, 0,arr.length-1)
// console.log(arr)
