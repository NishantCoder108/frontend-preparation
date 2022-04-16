process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = '';
let currentLine= 0;


function readLine() {
    return standardInputString[currentLine++];
}
process.stdin.on('data',rawData =>{
    standardInputString +=rawData;
})

process.stdin.on('end',_ =>{
    standardInputString =standardInputString.trim().split('\n').map(line =>{
        return line.trim()
    })

    main();
})

/**Method-1
 * This is all readline
 * 
function main(){
    const name = readLine();
    console.log(name)
}

 */


/**
 * 
 Input data giving and also return Data  in VS Code

 node.exe solution.js < input.txt > output.txt      --->when we write this code , that text in input that will be copy in output.txt
 */


 function main(){
     const r = parseInt(readLine());
     console.log("Area =" , Math.PI * r *r);  //when we give input i.e r ,that will be multiply
 }