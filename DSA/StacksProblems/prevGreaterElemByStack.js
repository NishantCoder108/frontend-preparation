//we are finding previous greater element by using stack;
function prevGreaterElemByStack(arr){
    let finalArr = new Array(arr.length);
    let stack = [];


    for(let i=0; i<arr.length; i++){
        if(stack.length === 0){
            finalArr[i] = -1;

        }
        else if(stack[stack.length-1] > arr[i]){
            finalArr[i] = stack[stack.length -1]
        }
        else{
            while(stack.length > 0  && stack[stack.length -1] < arr[i]){
               stack.pop();
            }

            if(stack.length === 0){
                finalArr[i] = -1;
            }
            else{
                finalArr[i] = stack[stack.length -1]
            }
        }

        stack.push(arr[i])
    }

    return finalArr
}

console.log(prevGreaterElemByStack([2,3,5,9,6,3])) //[ -1, -1, -1, -1, 9, 6 ]