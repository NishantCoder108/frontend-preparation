const BOARD_WIDTH = 3;  //divide by 3 ,due to row & col is 3

let boardState  = generateEmptyBoardState();
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
        console.log('clicked', i)


        const row = Math.floor(i / BOARD_WIDTH);//row Find
        const col = i % BOARD_WIDTH;   //Remainder is col
        console.log("Row is :",row, ' \n Col is',col, ' \n i is ',i ,"\n Board width :", BOARD_WIDTH);


        makeMove(gameSquare, row,col); //when we uncomment this line no reapeat listener
    })
})


//Restart the Game
restartButton.addEventListener('click',restartGame)


//make Move Functions
function makeMove(gameSquare, row ,col){

    gameSquare.textContent = currentPlayer ===1 ? 'X' : "0";   //Adding textContent =currentplayer 
     gameSquare.disabled =true;
     numMovesDone++;
     boardState[row][col] = currentPlayer;
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
function didPlayerWin(currentPlayer){
    //some condition player win
    const rows = [0,1,2];
    const wonHorizontal =rows.some(row =>{
        return(
            boardState[row][0] === currentPlayer &&
            boardState[row][1] === currentPlayer &&
            boardState[row][2] === currentPlayer
        );
    });

    const cols = [0,1,2];
    const wonVertical =cols.some(col =>{
        return (
            boardState[0][col] === currentPlayer &&
            boardState[1][col] === currentPlayer &&
            boardState[2][col] === currentPlayer
        );
    });


    const wonTopLeftToBottomRight =  (
        boardState[0][0] === currentPlayer &&
        boardState[1][1] === currentPlayer &&
        boardState[2][2] === currentPlayer
    );


    const wonTopRightToBottomLeft =(
        boardState[0][2] ===currentPlayer &&
        boardState[1][1] === currentPlayer &&
        boardState[2][0] === currentPlayer
    );
    return (
        //this is four condition ,player can win
        wonHorizontal ||
        wonVertical   ||
        wonTopLeftToBottomRight ||
        wonTopRightToBottomLeft
    );

}

//When Game is End
function endGame(){

    restartButton.style.display ='block';
    gameSquares.forEach(gameSquare =>{
        gameSquare.disabled =true;
    })
}


//set current player function

function setCurrentPlayerHeader (){
    gameHeading.textContent =`Player ${currentPlayer}'s Turn`;
}


//Restart Game Function
function restartGame(){
    boardState =generateEmptyBoardState();
    currentPlayer = 1;
    numMovesDone =0;
    setCurrentPlayerHeader();
    gameSquares.forEach(gameSquare =>{
        gameSquare.textContent = '';
        gameSquare.disabled =false;
    });

    restartButton.style.display ='none';
}


//Generate board function
function generateEmptyBoardState(){
    return new Array(BOARD_WIDTH)
      .fill()
      .map(() => new Array(BOARD_WIDTH).fill());
}
