function binarySearch(arr, numberToSearch){

    let start = 0;
    let end = arr.length -1;
    let bestIndexTillNow = -1;

    while(start <= end){  
        let mid =Math.floor((start + end)/2) ;
  
    if( numberToSearch === arr[mid]){
        //found the answer
        // but still search in left side
        bestIndexTillNow = mid;
        end = mid - 1;
    }
    else if(numberToSearch < arr[mid]){
    //   go to left side
        end = mid - 1;

    }
    else{
        // go to right side
        start = mid + 1;
    }}

    return bestIndexTillNow;
}

console.log(binarySearch([1,1,1,1,2,2,2,3,3,3,3,],5))