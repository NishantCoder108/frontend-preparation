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
    let w = +readLine();
    if(w % 2 ===0 ){
        console.log("Yes");
    }
    else{
        console.log("No")
    }
}