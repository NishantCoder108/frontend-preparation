/*[2,3,5,9,6,3] ---->
 [-1,-1,-1,-1,9,6]
 */

function prevGreaterElemByBFA(arr){
    let finalArr =[]

    for(let i=0; i<arr.length; i++){

   if(i ==0){
       finalArr[i] = -1;
   }
   else if(arr[i -1] > arr[i]){
       finalArr[i] = arr[i-1]
   }
   else{
       let j=i;
       while(j >0 &&  arr[j-1]<arr[j]){
           j--;
       }

       if(j ==0){
           finalArr[i] = -1;
       }else{
           finalArr[i] = arr[j-1]
       }
   }
    }
    return finalArr

}

console.log(prevGreaterElemByBFA([2,3,5,9,6,3]))//[ -1, -1, -1, -1, 9, 6 ]