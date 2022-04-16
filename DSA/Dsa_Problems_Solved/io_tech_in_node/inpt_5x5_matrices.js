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


function main(){

    let matrix =[];
    for(let i =0; i<5; i++){
        matrix[i] =readLine().split(' ').map(Number);
    }

    console.log("Matrix is : ", matrix);
    /*

INPUT:-
0 0 0 0 0
0 0 0 0 1
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0

OUTPUT:-
    Matrix is :  [
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]

    */

//Logic

let res =0;
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if(i === 0 && j ===0){
            if(matrix[i][j] ===1){
                res = 4;
            }
            else{
                res= 0;
            }
        }
        else if(matrix[i][j] ===1){
            res =Math.abs(i-2) + Math.abs(j-2)
        }
    }
}

console.log(res)
}


/**
What is minimum move ? ,that move to center.

 Matrix is :  [
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
1
 */
