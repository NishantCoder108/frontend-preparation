// Find Previous Largest Element?

function PreviousLargestElement(arr){
    let finalArr = new Array(arr.length)

    let stack = []

    for(let i = 0; i<= arr.length-1; i++){

        if(stack.length == 0){
            finalArr[i] = -1;
        }
        else if(stack[stack.length -1] > arr[i]){
            finalArr[i] = stack[stack.length -1]
        }
        else{
            //top ==arr[i] or top < arr[i] then pop the stack
            while(stack.length > 0  && stack[stack.length-1] < arr[i]){
                console.log(stack)
                stack.pop()
            }

            if(stack.length == 0){
                finalArr[i] = -1
            }
            else if(stack[stack.length -1] >= arr[i]){
                finalArr[i] = stack[stack.length-1];
              
            }
        }

        stack.push(arr[i])
    }


    return finalArr;
    
}

let test1 = [10, 4, 2, 20, 40, 12, 30] //Output :         -1, 10, 4, -1, -1, 40, 40

let test2 = [10, 20, 30, 40] //Output :        -1, -1, -1, -1
 
let test3 = [40, 30, 20, 10] //Output :        -1, 40, 30, 20
console.log(PreviousLargestElement(test3))

