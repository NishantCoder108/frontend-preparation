/*Sample Input
array = [ 8, 5,2,9,5,6,3]

sample output
Result :-[2,3,5,5,6,8,9]
*/

function bubbleSort(array){
    let isSorted =false;
    let counter =0;
    while(!isSorted){
        isSorted =true;

        for(let i = 0; i< array.length-counter; i++){
            if(array[i] > array[i+1]){
                swap(i , i+1, array);

                isSorted =false
            }
        }
        counter++;
    }
    return array
}

function swap( i ,j , array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

let array = [ 8, 5,2,9,5,6,3]
console.log(bubbleSort(array))