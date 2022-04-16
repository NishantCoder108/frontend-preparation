process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = '';
let currentLine =0;

function readLine(){                         //Next Line
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
    
    process.stdout.write("hello")  //It directly write in output.txt
    process.stdout.write(" Nishant") 


    /*
    When we write console to different line , it will be different .___________

    console.log("Hello Nishant Next LIne")
    console.log("Hello Nishant Other Next LIne")


    But when we write in ---process.stdout.write("") ,in different line ,it will be wrap in single Line
    e.g.
    hello Nishant
    */
}