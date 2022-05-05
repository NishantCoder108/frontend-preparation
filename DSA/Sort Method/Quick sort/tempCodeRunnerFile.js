// Quick Sort by for loop in Easy Way;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const PIVOT = arr[0];
  const GREATER = [];
  const LESSER = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > PIVOT) {
      GREATER.push(arr[i]);
    } else {
      LESSER.push(arr[i]);
    }
  }

  const sorted = [ ...quickSort(GREATER), PIVOT, ...quickSort(LESSER)];

  return sorted;
}

console.log(quickSort([8, 4, 2, 2, 847, 5, 9, 2]));
