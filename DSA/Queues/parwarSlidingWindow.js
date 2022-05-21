/*function print(arr, k) {
	let qi = [];
	let i;

	for (i = 0; i < k; i++) {
		while (qi.length != 0 && arr[i]  >= arr[qi[qi.length - 1]]) {
			qi.pop();
		}
		qi.push(i);
	}
	console.log("i",i, qi)

	for (; i < arr.length; i++) {
		console.log(i, qi, arr[qi[0]]);

		while (qi.length != 0 && qi[0] <= i - k) {
			qi.shift();
		}

		while (qi.length != 0 && 7 >= arr[qi[qi.length - 1]]) {
			qi.pop();
		}
		
		qi.push(i);
	}
	console.log(arr[qi[qi.length - 1]]);
    console.log(arr)
}

// Input: nums = [1,3,-1,-3,5,3,6,7], K = 3
// Output: [3,3,5,5,6,7]


print([1,3,-1,-3,5,3,6,7],3)
*/


function print(arr, k) {
	let qi = [];
	let i;

	for (i = 0; i < k; i++) {
		while (qi.length != 0 && arr[i]  >= arr[qi[qi.length - 1]]) {
			qi.pop();
		}
		qi.push(i);
	}
	// console.log("i",i, qi)

	for (; i < arr.length; i++) {
		console.log(arr[qi[0]]);

		while (qi.length != 0 && qi[0] <= i - k) {
			qi.shift();
		}

		while (qi.length != 0 && arr[i] >= arr[qi[qi.length - 1]]) {
			qi.pop();
		}
		
		qi.push(i);
	}
	console.log(arr[qi[qi.length - 1]]);
}

print([1,3,-1,-3,5,3,6,7],3)