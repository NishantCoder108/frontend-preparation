process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = "";
 
process.stdin.on('data', function (userInput) {
    inputString = inputString + userInput;
});
 
process.stdin.on('end', function(x) {
    inputString.trim();
    main();
});
 
function main() {
 console.log("Sucess Rate:" );
 console.log('Input Strig:', inputString
 );
}