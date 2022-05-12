//We are finding next greater element by using Stack;

function nextGreaterElemByStack(arr){
    let finalArr = []
    let stack = []

    for(let i = arr.length -1; i>=0 ; i--){
        if(stack.length === 0){
            finalArr[i] = -1;
        }
        else if(stack[stack.length -1]> arr[i]){
            finalArr[i] = stack[stack.length -1]
        }
        else{
            while(stack.length > 0  &&  stack[stack.length -1] <= arr[i]){
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

console.log(nextGreaterElemByStack([4,9,6,8,1,5]))//[9,-1,8,-1,5,-1]