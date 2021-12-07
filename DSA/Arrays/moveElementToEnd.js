function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);

    i++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

let a = [2,2,2,9,6,8,7,5];
let tomove = 2;
console.log( moveElementToEnd(a, tomove))

//First target to move one step to another , so for that we take from both sides , when i = targetMove  then it will swap , and j = targetMove then it will swap left till , when unequal to j. And then result will all integers swap to one side 