const BOARD_WIDTH = 3;  //divide by 3 ,due to row & col is 3


//If the game square were numbered from 0 to 8
const WIN_CONDITIONS = [
    [0,1,2] , //first row
    [3,4,5] , //second row
    [6,7,8] , //third row
    [0,3,6] , //first column
    [1,4,7] , //second column
    [2,5,8] , //third column
    [0,4,8] , //first diagonal
    [2,4,6] ,//second diagonal
];


let currentPlayer =1 ;
let numMovesDone =0;

const gameHeading =document.getElementById('game-heading')
const gameSquares =document.querySelectorAll('.game-square');
const restartButton = document.getElementById('restart-button'
);


gameSquares.forEach((gameSquare,i) =>{
    // console.log('I :-',i  );
    // console.log("GameSquare :- ",gameSquare)

    gameSquare.addEventListener('click',()=>{
      
     makeMove(gameSquare); //when we uncomment this line no reapeat listener
    })
})


//Restart the Game
restartButton.addEventListener('click',restartGame)


//make Move Functions
function makeMove(gameSquare){

    gameSquare.textContent = currentPlayer ===1 ? 'X' : "0";   //Adding textContent =currentplayer 
     gameSquare.disabled =true;
     numMovesDone++;
   
     //if player win what will do  next
     if(didPlayerWin(currentPlayer)){
         gameHeading.textContent =`Player ${currentPlayer} Won!`;
         endGame();
     }else if(numMovesDone >= BOARD_WIDTH * BOARD_WIDTH){
         gameHeading.textContent = 'Tie Game!';
         endGame();
     }else{  //if no one win
         currentPlayer =currentPlayer  ===1 ? 2 :1  //change the player ,1 for first ,2 for next
         setCurrentPlayerHeader();
     }

    
}
//if win player , thats function
function didPlayerWin(){
    //some condition player win
    const releventText = currentPlayer === 1 ? "X" : "0";
    return WIN_CONDITIONS.some(condtion =>{
        return condtion.every(gameSquarePosition =>{
            return gameSquares[gameSquarePosition].textContent === releventText;
        });
    });
}

//When Game is End
function endGame(){

    restartButton.style.display ='block';
    gameSquares.forEach(gameSquare =>{
        gameSquare.disabled =true;
    });
}


//set current player function

function setCurrentPlayerHeader (){
    gameHeading.textContent =`Player ${currentPlayer}'s Turn`;
}


//Restart Game Function
function restartGame(){
    currentPlayer = 1;
    numMovesDone =0;
    setCurrentPlayerHeader();
    gameSquares.forEach(gameSquare =>{
        gameSquare.textContent = '';
        gameSquare.disabled =false;
    });

    restartButton.style.display ='none';
}
 /*
//backend
api 
method database
asycnchrous 
real time happening
queues solution
computation

caching


frontend
js
typescript
css
html
browser well
caching
caching control
idea the api work
how the cdn work 
dynamic server download

full stack
peak your area expertise
can write code
dsa
tree ,--no use

clean code 
reusilbity code
simple dsa

pickup quick things and use in them

priotise yourself

taking problem and breaks down

small pieces code and how it is working 

just try out and check it
How to get data file from server

Just reapeat ,practice and practice yourself

curious to learning

//develop skill in chunks
1.Curiosity is very important.
2.Just one backend application understanding for frontend
3.Complexity is more higher in initial phase
4.Just you can make with the e.g.
   Flipkart   , Amazon , all paided Highly

5.Just liking code automatically comes all thing 


**How to propsal to idea to firm
__just google how to approach idea to propasal

Be Curious , Don't Give up


*/
