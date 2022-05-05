// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     console.log(max - min,'max min ')

//     let c =(Math.random() * (max - min) + min);
//     console.log(c,'c ')
//     console.log(max -min,'max min ')
//     return Math.floor(c)
//     }

    
// // console.log(getRandomInt(2.66,4.9))    
// // Quick Sort by for loop in Easy Way;
// console.log("hello");
// function quickSort(array) {
//   quickSortHelper(array, 0, array.length-1);
//   return array;
// }

// function quickSortHelper(arr, startIdx, endIdx) {
//     // let startIdx = startIdx;
//     // let endIdx = endIdx;
//   if (startIdx >= endIdx) {
//     return;
//   }
//   let pivotIdx = getRandomInt(startIdx,endIdx)
//   pivotIdx = swapIdx(pivotIdx,startIdx)
// //   startIdx = pivotIdx

 
//   let leftIdx = startIdx + 1;
//   let rightIdx = endIdx;

//   while (leftIdx <= rightIdx) {
//     if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
//       swap(leftIdx, rightIdx, arr);
//     }
//     if (arr[leftIdx] <= arr[pivotIdx]) {
//       leftIdx++;
//     }
//     if (arr[rightIdx] >= arr[pivotIdx]) {
//       rightIdx--;
//     }
//   }

//   swap(pivotIdx, rightIdx, arr);

//   let subarrayIsSmaller = (rightIdx - 1 - startIdx) < (endIdx - (rightIdx + 1));

//   if (subarrayIsSmaller) {
//     quickSortHelper(arr, startIdx, rightIdx - 1);
//     quickSortHelper(arr, rightIdx + 1, endIdx);
//   } else {
//     quickSortHelper(arr, rightIdx + 1, endIdx);
//     quickSortHelper(arr, startIdx, rightIdx - 1);
//   }
// }

// function swap(i, j, arr) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// console.log("hello");
// console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));

// function swapIdx(pIdx,sIdx){
//     const j = pIdx;
//     pIdx = sIdx;
//    sIdx = j;
//    return pIdx
// }


// -----------Other Method check of Bittu Agarwal ,code check of quick sort
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end){
    let pivot = arr[end];
    let smaller = start;
    for(let i = start;i<end;i++){
        if(arr[i] < pivot){
            swap(arr,i,smaller);
            smaller++;
        }
    }
    swap(arr,end,smaller);
    return smaller;
}

function quickSort(arr, start, end){

    if(start >= end){
        return;
    }
    let part = partition(arr, start, end);
    quickSort(arr,start,part-1);
    quickSort(arr,part+1,end);

}


let arr =  [544, -578, 556, 713, -655, -359, -810, -731, 194, -531, -685, 689, -279, -738, 886, -54, -320, -500, 738, 445, -401, 993, -753, 329, -396, -924, -975, 376, 748, -356, 972, 459, 399, 669, -488, 568, -702, 551, 763, -90, -249, -45, 452, -917, 394, 195, -877, 153, 153, 788, 844, 867, 266, -739, 904, -154, -947, 464, 343, -312, 150, -656, 528, 61, 94, -581];

quickSort(arr, 0,arr.length-1)
console.log(arr)