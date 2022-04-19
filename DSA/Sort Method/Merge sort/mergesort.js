// Merge sort Method by 1st case ,
// Both Time & Space || O(nlog(n)) |  O(nlog(n)) 

function mergeSort(arr){

    if(arr.length <=1){
        return arr;
    }

    const midIdx = Math.floor((arr.length / 2));
    console.log(midIdx)

    let leftHalf = arr.slice(0,midIdx);
    let rightHalf = arr.slice(midIdx,arr.length);

    return mergeSortedArr(mergeSort(leftHalf), mergeSort(rightHalf));


}


function mergeSortedArr(leftHalf, rightHalf){
    let sortedArr = new Array(leftHalf.length + rightHalf.length);

    let k =0 //current pointer
    let i =0 //left's index pointer
    let j =0 //right's index pointer

    while((i< leftHalf.length) &&( j < rightHalf.length)){
        if(leftHalf[i] <= rightHalf[j]){

            sortedArr[k] = leftHalf[i]
            i++;

        }
        else {
            sortedArr[k] = rightHalf[j];
            j++;
        }
        k++;
    }


    while(i< leftHalf.length){
        sortedArr[k] = leftHalf[i]
        i++;
        k++;
    }

    while(j < rightHalf.length){
        sortedArr[k] = rightHalf[j]
        j++
        k++
    }


    return sortedArr;
}


console.log(mergeSort([5,3,9,2,1,5]))