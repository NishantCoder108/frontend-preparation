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
    let n = +(readLine());
    const line = readLine().split(' '); //['1','2','3','4']
    let arr = line;
    console.log("n is :",n);   //1
    console.log("line is :", line)     //[ '1', '2', '3', '4' ]

    console.log("line of O is :",line[0]);   //line of O is : 1
    console.log("type of Line[0] is :", typeof +line[0]);     //type of Line[0] is : number
    
    //Reverse Array
    let Reverse =arr.reverse()
    console.log(Reverse);      //[ '4', '3', '2', '1' ]
    //Fianl Output
    console.log("Final Output :", Reverse.join(' ')+'\n' )    //Final Output : 4 3 2 1
}




/**
STDIN
1            //Here ,2 then n will be 2
1 2 3 4



Output:

n is : 1
line is : [ '1', '2', '3', '4' ]
line of O is : 1
type of Line[0] is : number
[ '4', '3', '2', '1' ]
Final Output : 4 3 2 1
 */


//From this type you can solve on is TARGET NUM and ARRAY questions