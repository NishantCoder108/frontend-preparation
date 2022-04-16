/**
 This is all about Metrices
 3 4
 1 2 3 4
 5 6 7 8
 9 10 11 12
 */

 process.stdin.resume();
 process.stdin.setEncoding('utf-8');

 let standardInputString = '';
 let currentLine =0;

function readLine(){
   return standardInputString[currentLine++]
}

 process.stdin.on("data",rawData =>{
    standardInputString +=rawData;
 })

 process.stdin.on("end", _=>{
    standardInputString = standardInputString.trim().split('\n').map(line =>{
        return line.trim();
    })

    main();
 })

 /**
 function main(){
     const [row ,col] =readLine().split(' ').map(Number)

     console.log('Row is :',row);
     console.log('Col is :',col);

 }

//When we write ,line no.33 just like ,only one line will be destructuring i.e.

OUTPUT:-

Row is : 3
Col is : 4

INPUT:-

3 4
1 2 3 4
5 6 7 8
9 10 11 12
  * 
  */


function main(){
    const [row ,col] =readLine().split(' ').map(Number); //row is destructuring

    let lineArr =[];
    for(let i = 0; i< row; i++){
        lineArr[i] = readLine().split(' ').map(Number)
    }        //when for loop is gone ,then all data is gave

    console.log(lineArr);
}

/*
INPUT:-

3 4
1 2 3 4
5 6 7 8
9 10 11 12


OUTPUT :-
[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]   //2D array

  */