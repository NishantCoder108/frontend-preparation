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




/**
 * 
 Input data giving and also return Data  in VS Code

 node.exe solution.js < input.txt > output.txt      --->when we write this code , that radius in input.txt file that will be resultant in output.txt
 */


 function main(){
     const r = parseInt(readLine());
     console.log("Area of Circle =" , Math.PI * r *r);  //when we give input i.e r ,that will be multiply
     console.log(" Area of Square : ,", r * r);
     console.log(" Area of Reactangle : ,", 2 * r)
 }


/*  In Task.json file ,we are changing i.e.   "args": [
                "area_find.js",  //filename is given
                "<",
                "input.txt",
                ">",
                "output.txt"
            ],
            It is working fine.  ctrl + shift +B
            */