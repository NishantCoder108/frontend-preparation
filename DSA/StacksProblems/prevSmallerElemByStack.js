//we are finding previous first smaller element  using Stack;

function prevSmallerElemByStack(arr){
    let finalArr =[]
    let stack = []

    for(let i = 0; i<arr.length;i++){
        if(stack.length ===0){
            finalArr[i] = -1;
        }
        else if(stack[stack.length-1] < arr[i]){
            finalArr[i] = stack[stack.length -1];
        }
         else{
             while(stack.length > 0  && stack[stack.length-1] > arr[i]){
                 stack.pop()
             }
             if(stack.length === 0){
                 finalArr[i] = -1;
             }else{
                 finalArr[i] = stack[stack.length-1]
             }
         }

         stack.push(arr[i])

    }

    return finalArr;
}

console.log(prevSmallerElemByStack([5,2,1,6,5]))//[ -1, -1, -1, 1, 1 ]