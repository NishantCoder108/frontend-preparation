/**
 Problem Statement
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 
Constraint 
 
• 1 <= nums.length <= 104
• -231 <= nums[i] <= 231 - 1
 
Input Format
 
• The first line of input consists of a single integer N denoting the number of elements in the array
• The second line of input consists of N space separated integers.
 
Output Format
 
• Print third distinct maximum number, if it doesn’t exist print the max number
 
Sample Input 1
 
4
1 2 3 1
 
Sample Output 1
 
1
 
Sample Input 2
 
3
1 2 2
 
Sample Output 2
 
2
 
Sample Input 3
 
10
1 1 1 8 8 4 8 2 4 2
 
Sample Output 3
 
2
 
Explanation of Sample 1
 
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
 
Explanation of Sample 2
 
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
 
Explanation of Sample 3
 
The first distinct maximum is 8.
The second distinct maximum is 4.
The third distinct maximum is 2.


 */



// Other Method


process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
process.stdin.setEncoding('utf-8'); // so that the input doesn't transform
 
let inputString1 = "";
let inputString = "";
let currentLine = 0;
 
process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput; // taking the input string
});
 
process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); // end line
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});
 
function readline() {
    let result = inputString[currentLine++];
    return parseInt(result); // change when you want to use strings, according to the problem
}
 
function main() {
 
		let n = readline();
		let arr = [];
		for( let i = 0 ; i < n ; i++ ){
			arr[i] = +readline();
		}
 
	// write your code here 
	arr.sort(function(a,b){   // sort in descending order
		return b-a;
	})
 
	console.log(arr);
 
	let newArr = [...new Set(arr)]; // remove duplicates
	console.log(newArr);
 
 
	 let l=newArr.length
 
	if(l>2){
 	console.log(newArr[2])
	 }
	 else{
	 	console.log( newArr[0])
	 }
 
 
 
        }