// Time Complexity O(n^2) | Space Complexity O(1)

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){

        for(let j=0; j<arr.length-1;j++){
            //   Swap if left > right
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    return arr
}


console.log(bubbleSort([2,1,8,4,5,34,3,3]))
