process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString ='';
let currentLine = 0;


function readLine(){
    return standardInputString[currentLine++];
}

//Input data Process
process.stdin.on("data", rawData =>{
    standardInputString += rawData;

})

//Retrived Data Process
process.stdin.on("end",_ =>{
    standardInputString =standardInputString.trim().split('\n').map(line =>{
        return line.trim();
    });

    main();
})

function main(){

    const arrOfNum = readLine().split(' ').map(Number); //Array is making when splitting ,but we mapped ,here is changing Number or String.
    console.log(arrOfNum) 
    console.log(arrOfNum.length)

    //Method 1 Reduce method
    let sum= arrOfNum.reduce(function(accumulator ,currValue){

     return accumulator = accumulator + currValue;
    },0)

    console.log("Sum of Array is :" ,sum)


    //Method 2 By For Loop
    let sumInForLoop=0;
    for(let i= 0; i<arrOfNum.length ; i++){
        sumInForLoop+=arrOfNum[i]
    }
    console.log("Sum of Array by for Loop is :", sumInForLoop)

}