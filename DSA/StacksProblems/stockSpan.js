// which days is greater last element means high price

function stockSpan(arr){

    let finalArr = new Array(arr.length);
    let stack = []

    for(let i=0; i< arr.length; i++){
        if(stack.length === 0){
            // finalArr[i] = i - (stack.length -1);
            finalArr[i] = 1;
        }
        else if(arr[stack[stack.length-1]]  > arr[i]){
         finalArr[i] = i - stack[stack.length -1];

        }
        else{
            while(stack.length > 0 &&  arr[stack[stack.length -1]]< arr[i]){
                stack.pop()
            }
            if(stack.length === 0){
                // finalArr[i] = i - (stack.length -1);
                finalArr[i] = 1;
            }else if(arr[stack[stack.length -1]] >= arr[i]){
                finalArr[i] = i - stack[stack.length-1];
              
            }
        }


        stack.push(i)
    }

    return finalArr;
}

let test1 = [100,80,60,70,60,75,85]  //output:[1,1,1,2,1,4,6]
let test2 = [31,27,14,21,30,22]  //output:[1,1,1,2,4,1]
console.log(stockSpan(test1))
console.log(stockSpan(test2))