let array = [5, 1, 22, 25, 6, -1, 8, 10, 11];
let sequence = [1, 6, -1, 10];

// Solution 1
// function isValidSubsequence(array, sequence) {
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     console.log("sequence Idx B ", seqIdx);
//     console.log("array Idx B", arrIdx);

//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     console.log("sequence Idx ", seqIdx);
//     console.log("array Idx ", arrIdx);

//     arrIdx++;
//   }
//   console.log(seqIdx, sequence.length);
//   return seqIdx === sequence.length;
// }

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (value === sequence[seqIdx]) seqIdx++;
    console.log(value);
  }
  return seqIdx === sequence.length;
}
console.log(isValidSubsequence(array, sequence));
