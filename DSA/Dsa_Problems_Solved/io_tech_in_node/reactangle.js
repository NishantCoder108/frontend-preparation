process.stdin.resume();
process.stdin.setEncoding('utf-8');


let standardInputString ='';
let currentLine = 0;

function readLine(){
  return  standardInputString[currentLine++];
}

process.stdin.on("data",rawData =>{
     standardInputString +=rawData;
})

process.stdin.on("end" ,_=>{
    standardInputString= standardInputString.trim().split('\n').map(line =>{
        return line.trim();
    })

    main();
})


function main(){
    let length = +(readLine()); //row is destructuring
    let width = +(readLine()); //row is destructuring

    console.log("Length is :" ,length);
    console.log("Width is :" ,width);

    let perimeter= 2 * (length + width);
    console.log("perimeter of Reactangle :" , perimeter);

    let hypotenuse_of_rec =Math.sqrt((length *length) +(width *width));
    console.log("Hypotenuse of Reactangle : " , hypotenuse_of_rec)


    let Area = length * width;
    console.log("Area of Reactangle :", Area);

   //Case of Area & Length is given
    let BaseOfRec = Area / length;
    console.log("Base of Reactangle :", BaseOfRec);


    //Case of Hypotenuse & Length is Given
    let BaseOfRecHypoIsGiven = Math.sqrt((hypotenuse_of_rec *hypotenuse_of_rec) - (length *length));
    console.log("Base of Reactagle , Hypo & Length is Given :" , BaseOfRecHypoIsGiven
    )
}