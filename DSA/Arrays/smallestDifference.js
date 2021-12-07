function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idOne = 0;
  let idTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idOne < arrayOne.length && idTwo < arrayTwo.length) {
    let firstNum = arrayOne[idOne];
    let secondNum = arrayTwo[idTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

// Do not edit the line below.
let ac = [134, 135, 15, 17];
let bc = [69, 26, 288, 2, 58, 69, 2];

console.log(smallestDifference(ac, bc));

// Here two things is happening ,first one is :-
// if firstNum is equal to secondNum then it directly return that smallest Number
// but , if it is not equal then smallest maybe equal to current and his smallest Pair will be return;