function binarySearchInRecur(arr, target, s, e) {

let start = s;
let end = e;


if(start > end) return -1;

let mid = Math.floor((start + end)/2)
console.log("MId is",mid)

if(target === arr[mid]) return mid;


if(target < arr[mid]){
  return binarySearchInRecur(arr,target , start , mid -1)
}


return binarySearchInRecur(arr, target, mid + 1, end);
}



let arr = [1,2,3,4,55,66,78];
let target = 78;
console.log(binarySearchInRecur(arr, target, 0, arr.length-1));
