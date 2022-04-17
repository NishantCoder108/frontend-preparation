function kthInBubbleSort(arr,k){

    for(let i=0; i<k; i++){

        for(let j=0;j<arr.length-1; j++){

            if(arr[j]> arr[j+1]){
                // swap if left> right
                let temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    return arr
}

let arr=[9,5,3,5,1,8]
// console.log(arr)
let k = 3
let kth = kthInBubbleSort([...new Set(arr)],k)
console.log('Actual array',arr)
console.log('Modified array',kth)
console.log(kth[kth.length -k])