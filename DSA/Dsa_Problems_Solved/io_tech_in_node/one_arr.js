process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = '';
let currentLine = 0;


function readLine(){
 return standardInputString[currentLine++];
}

process.stdin.on("data",rawData => {
    standardInputString += rawData;
})


process.stdin.on("end" ,_ =>{
    standardInputString =standardInputString.trim().split("\n").map(line =>{
        return line.trim();
    })


    main();
})

function main(){
    // let n = +(readLine());  //First number be exact what number
    const line = readLine().split(' ').map(Number)  //Map for ,string convert to Number

    console.log(line)   //[ 1, 2, 3, 4, 5, 6 ]
    console.log(typeof line)   //  object
    console.log(line instanceof Array)   //  true
    console.log(typeof line[0])   //  number

}




