process.stdin.resume();
process.stdin.setEncoding('utf-8');


let standardInputString = '';
let currentLine = 0;

function readLine(){
   return standardInputString[currentLine++];
}

process.stdin.on("data",rawData =>{
     standardInputString += rawData;
})

process.stdin.on("end" ,_=>{
    standardInputString = standardInputString.trim().split('\n').map(line =>{
       return line.trim();
    })

    main();
})


function main(){

let totalNum = +(readLine());
let naturalArr = (readLine().split(' ').map(Number));

console.log("Total Natual Number is :",totalNum)
console.log("Natural Array is :",naturalArr)


//Sort Array in Ascending Order
naturalArr.sort((a,b) => a -b)
console.log("Sorting Natural Array is :" ,naturalArr);

//New Natural Array
let newArr = new Array(20);
for(let i=0; i<totalNum; i++){
   newArr[i] =i+1
}
console.log("New Array is : ",newArr)


//Missing Number in Array
/*
let missArr =[]; 
for (let value1 of newArr){

    for(let value of naturalArr){
         if(value ===value1){      //value is matching 
            missArr.push(value)
          }

          //value and value1
          console.log("New Array 'VAlue :",value1)
          console.log("Natural Array 'VAlue :",value)
   
    //  console.log(includNum);
    //  console.log("missArray is :",missArr)
    }
    
}
*/
let missingArr =[];

for(let i=0; i<totalNum; i++){
            if(naturalArr.includes(i+1)) continue;
           missingArr.push(i+1)
    
}
    console.log("Missing Array is :-", missingArr);
    console.log("Missing Number is :-", missingArr.join(' ')+'\n');



//Missing Number Array
// console.log('Missing Number In Array is :' ,missArr)
}