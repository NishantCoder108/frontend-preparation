// Selection Sort is creating.

function selectionSort(arr){

    for(let i=0; i<arr.length-1; i++){

        let smallestIdx =i;

        for(let j =i+1; j<arr.length; j++){

            if(arr[smallestIdx] > arr[j]){
                 smallestIdx = j;
            }
        }

        const temp = arr[i]
        arr[i] =arr[smallestIdx]
        arr[smallestIdx] = temp;
    }

    return arr

}
let a =selectionSort(['Ram','Shayam',"Abhishek","Rohan","Bhima"])
// let a =selectionSort([9,5,8,9,6,6,9,84,5,8,2,1,3,2,8])
console.log(a)
// console.log(a)