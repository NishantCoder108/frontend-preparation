//This problem is based on First Previous Greater Element ,so we start with left side .
function stockSpanProblem(arr){
    let finalArr = []
    let stack =[]

    for(let i = 0; i<arr.length; i++){
        if(stack.length === 0 ){
            finalArr[i] = 1;
        }
        else if(arr[stack[stack.length-1]]  > arr[i]){
            finalArr[i] = i - stack[stack.length -1];
        }
        else{
            while(stack.length > 0   && arr[stack[stack.length-1]]<= arr[i]){

                stack.pop()
            }
            if(stack.length === 0){
                finalArr[i] = 1;
            }
            else{
                finalArr[i] =i - stack[stack.length -1]
            }
        }

        stack.push(i)
    }
    return finalArr
}

let stock = [100,80,60,70,60,75,85]//output:[1,1,1,2,1,4,6]
let stock2 = [31,27,14,21,30,22]  //output:[1,1,1,2,4,1]
console.log(stockSpanProblem(stock))
console.log(stockSpanProblem(stock2))