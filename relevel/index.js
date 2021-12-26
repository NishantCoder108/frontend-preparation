console.log("Relevel Test")
/**
 Problem Statement

You are given two arrays A and B, each having length N. You need to tell if it is possible to form another array C of length N such that : Ci is equal to either Ai or Bi Array C is non-increasing, i.e Ci<=Ci-1 for all 2<=i<=N.

Input Format

First line contains T denoting the number of test case. First line of every testcase contains a single integer N. Next line of every testcase contains N space separated integers denoting array A. Next line of every testcase contains N space separated integers denoting array B.

Output Format

For every testcase print “YES” if there exists an array C that satisfies the given conditions else print “NO”.

Constraints

1<=T<=5 1<=N<=105 1<=Ai<=109

Sample Input 1

2 3 4 6 5 3 4 3 2 4 5 3 5

Sample Output 1

YES NO

Explanation of Sample 1

For testcase 1 :

Let C1 = A1 C2 = B2 C3 = B1

Hence C becomes = [4 4 3] which is non-increasing.
 */

function isValidSubsequence(arrayA, arrayB, arrayC) {
  // Write your code here.
  let seqIdx = 0;
  for (const value of arrayC) {
    if (seqIdx === arrayC.length) break;
    if (value === arrayB[seqIdx] || arrayA[seqIdx]){seqIdx++;} 
else{
    seqIdx ++;
}
    console.log(value);
  }
  return seqIdx === arrayC.length;
}
console.log(isValidSubsequence(arrayA, arrayB ,arrayC));