process.stdin.resume();
process.stdin.setEncoding('utf8');
 
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
 
  main();
});
 
function readline() {
  return inputString[currentLine++];
}
 
function main(){
	let index = readline()
 
function fab(n) {
  let arr = [0, 1];
 
  for (i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  arr.shift(arr[0]);
  console.log(arr[index-1]);
}
 
fab(4);
}
// Second Solution

/**
 // your code goes here
let first=-1,second=1;
	let third;
	let n=10;
	while(n>0)
	{
	third=first+second;
	console.log(third);
	first=second;
	second=third;
	n--;
	}
 */

/**
 You are given an integer n, find the nth fibonacci number using recursion only.

Constraint 
• 1 <= n <= 40

Input Format
• The single line of input consists of a single integer n

Output Format
• Print the n-th fibonacci number, starting from 0th eg in sequence 0 1 1 2 3
0 is the 0th number, 2 is the 3rd number

Sample Input 1
4
Sample Output 1
3

Explanation of Sample 1
0 1 1 2 3 -> 4th number in the fibonacci series is 3 (starting from 0th)

Sample Input 2
0
Sample Output 2
0
Explanation of Sample 2
0 is the first element in fibonacci series

Sample Input 3
12
Sample Output 3
144
Explanation of Sample 3
0 1 1 2 3 5 8 13 21 34 55 89 144, 144 is the 12th element in fibonacci series



 */