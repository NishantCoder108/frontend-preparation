let arr= [4,5,3,2,1,8,5,3,1]

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){

        for(let j=i; j>0; j--){

            if(arr[j-1]> arr[j]){
               const temp = arr[j]
               arr[j]= arr[j-1]
               arr[j-1] = temp;
            }
        }
    }


    return arr
}

console.log(insertionSort(arr))