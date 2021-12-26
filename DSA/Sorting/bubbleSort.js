function bubbleSort(array) {
  // Write your code here.
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);

        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}



// Do not edit the line below.
exports.bubbleSort = bubbleSort;

let array =[2,4,5,6,7,7,2,2,25,6]
console.log(bubbleSort(array))