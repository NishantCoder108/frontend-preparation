function sortedSquaredArray(array) {
  const sortedSqr = new Array(array.length).fill(0);
  let smallestValueIdx = 0;
  let largestValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallestValueIdx];
    const largerValue = array[largestValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSqr[idx] = smallerValue * smallerValue;
      smallestValueIdx++;
    } else {
      sortedSqr[idx] = largerValue * largerValue;
      largestValueIdx--;
    }
  }
  return sortedSqr;
}


// function sortedSquaredArray(array) {
//     // Write your code here.
//       const sortedSqr = new Array(array.length).fill(0);
//     for( i=0; i<array.length; i++){
//           const value = array[i]
//           sortedSqr[i] = value * value;
//       }
//       sortedSqr.sort((a,b) => a - b)
      
      
//   return sortedSqr
//   }
let array = [4, 5, 2, 1, 7, 9, 0];
array =[-8,0 ,1, 2,4,5,7,9]

console.log(sortedSquaredArray(array));

//in second solution , you must have in ascending order then it works properly .

//in first solution , first make new array approx array.length and then square it and then sorted in ascending order