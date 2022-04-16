function firstLast(arr,target){
let start = 0;
let end = arr.length -1;

let first =-1,
last=-1;
while(start <=end){

    let mid = Math.floor((start+end)/2)

    if(target === arr[mid]){

        first=mid;
        last=mid;

        while(target === arr[first - 1]){
            first-=1;
        }
        while(target === arr[last + 1]){
            last+=1;
        }

        return [first,last]
    }
    else if(target < arr[mid]){
        end = mid -1;
    }
    else {
        start = mid + 1;
    }
}

return -1;
}


console.log(firstLast([1,1,1,2,2,2,2,3,3,3,3,4,4,4],4))