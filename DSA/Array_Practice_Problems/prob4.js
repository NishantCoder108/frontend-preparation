/*Given an array of n elements ,Search a number in an array */

let arr = [5, 51, 36, 2, 5, 8];
let searchNum = 2;

const searchFunc = (arr, searchNum) => {
  let findNum = arr.find(function (value) {
    return value === searchNum;
  });

  if (findNum === undefined) {
    console.log("This Number is not present in an Array");
  } else {
    console.log("Your Search Number :", findNum);
  }
};

searchFunc(arr, searchNum);


// ____________________________________
// for (let i = 0; i < arr.length; i++) {
//  First Approach
//  let a = searchNum == arr[i]
//  const c = a ? 'jgkwgj':'bnb' ;
//   console.log(c);

// Second Approach
// if(searchNum === arr[i] ){
//     console.log('true')
// }
// }
// ___________________________________________

