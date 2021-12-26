function threeNumberSort(array, order) {
    // Write your code here.
      const firstValue = order[0];
      const thirdValue= order[2];
      
      let firstIdx = 0;
      for(let idx = 0; idx <array.length; idx++){
          if(array[idx] === firstValue){
              swap(firstIdx , idx ,array);
              firstIdx++;
          }
      }
      let thirdIdx =array.length -1;
      for(let idx = array.length-1; idx>-1; idx--){
          if(array[idx] === thirdValue){
              swap(thirdIdx ,idx, array);
              thirdIdx--;
          }
      }
      return array;
  }
  function swap(i, j ,array){
      const temp = array[j];
      array[j] = array[i];
      array[i] =temp;
  }
  
  // Do not edit the line below.
  exports.threeNumberSort = threeNumberSort;


  let  array= [1, 0, 0, -1, -1, 0, 1, 1];
  let order= [0, 1, -1];
  console.log(threeNumberSort(array, order))

  /*
  Result:
  [
  0, 0,  0,  1,
  1, 1, -1, -1
]
 */


//second Solution
function threeNumberSort2(array, order) {
    // Write your code here.
      const firstValue =order[0];
      const secondValue = order[1];
      
      
      let firstIdx= 0;
      let secondIdx = 0;
      let thirdIdx = array.length-1;
      
      while(secondIdx <= thirdIdx){
          const value = array[secondIdx];
          if(value === firstValue){
              swap(firstIdx ,secondIdx ,array);
              firstIdx++;
              secondIdx++;
          }else if(value === secondValue){
              secondIdx++;
          }else{
              swap(secondIdx ,thirdIdx ,array);
              thirdIdx-=1;
          }
      }
      return array;
  }
  
  function swap(i ,j ,array){
      const temp = array[j];
      array[j] =array[i];
      array[i] = temp;
  }
  // Do not edit the line below.
  exports.threeNumberSort = threeNumberSort;

  console.log(threeNumberSort2(array,order))
  /*[
  0, 0,  0,  1,
  1, 1, -1, -1
]*/