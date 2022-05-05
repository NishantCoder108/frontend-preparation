const arr = [14,9,6,1,8,5]
let k = 3
function bubbleFunc(){
let counter = 0;

    for(let i=0; i<arr.length -1; i++){
        for(let j=0;j<arr.length-1-counter; j++){
            if(arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;

            }
            
        }
       counter++; 
    }

    return arr;
}

console.log(bubbleFunc())