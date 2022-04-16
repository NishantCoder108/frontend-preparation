function fib(n) {
  const a = Math.pow(1 + Math.sqrt(5), n);
  const b = Math.pow(1 - Math.sqrt(5), n);

  const c = Math.pow(2, n) * Math.sqrt(5);

  return (a + b) / c;
}
let n = 5 ;
console.log("Fibnocci Number is ", fib(Math.abs(n)));


// This is another method to solve this questions

function getNthFib(n){
    const lastTwo = [0,1]
    let counter = 3;

    while(counter <= n){
        const nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib;

        counter++;
    }

    return n> 1 ? lastTwo[1] :lastTwo[0]
}



console.log("getNthFib is :",getNthFib(n), ' , n is',n)

function fab(n) {
  let arr = [0, 1];


  for (i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
//   arr.shift(arr[0]);

  n>1 ?console.log(arr[n ]) : console.log(0)
 
}

fab(n);



// Final Fibonacci Series nth num?

function FibSeries(n){
     
    let arr = [0,1]

    for(let i = 0; i< n; i++){
        let pushNum = arr[arr.length-1] + arr[arr.length -2]
        arr.push(pushNum)

    }
console.log(arr)
     return n >1 ?  arr[n] : arr[0]
}
let g = 3
console.log("FibSeries is :", FibSeries(n));


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
     	console.log(fib(n));
 
        }
function fib(n)
{
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}



