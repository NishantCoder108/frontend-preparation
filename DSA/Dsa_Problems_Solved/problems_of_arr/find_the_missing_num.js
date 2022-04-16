process.stdin.resume();
process.stdin.setEncoding('utf-8');


let standardInputString = '';
let currentLine = 0;


function readLine(){
   return standardInputString[currentLine++];
}
process.stdin.on("data" , rawData =>{
    standardInputString += rawData;
})


process.stdin.on("end" ,_=>{
    standardInputString = standardInputString.trim().split('\n').map(line=>{
        return line.trim();
    })

    main();
})


function main(){
    let missingNum = +(readLine()); 
    let arrNum = (readLine().split(' ').map(Number)); //row is destructuring

    console.log("Missing Number is :" ,missingNum);
    console.log("Array is :" ,arrNum);


   let missCheckNum = arrNum.some((num) =>{
       return num ===missingNum;
    })
    
console.log( 'Missing Check Number is :',missCheckNum)
    if(missCheckNum ===true){
        console.log("This Number is Present in Array")
    }
    else{
        console.log(missingNum ,' is missing number in your array');
    }
}