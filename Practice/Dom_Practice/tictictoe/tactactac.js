let currentPlayer = 1;
const boardClasses = document.querySelectorAll(".board-class");

boardClasses.forEach((boardClass, i) => {
  boardClass.addEventListener("click", () => {
    a(boardClass);
  });
});

function a(boardClass) {
  boardClass.textContent = currentPlayer === 1 ? "O" : "X";
  boardClass.disabled = true;

  winCondition();
  currentPlayer = currentPlayer === 2 ? 1 : 2;
}

//   winCondition();
function winCondition(matchBox) {
  let box1 = document.getElementById("1").textContent;
  let box2 = document.getElementById("2").textContent;
  let box3 = document.getElementById("3").textContent;
  let box4 = document.getElementById("4").textContent;
  let box5 = document.getElementById("5").textContent;
  let box6 = document.getElementById("6").textContent;
  let box7 = document.getElementById("7").textContent;
  let box8 = document.getElementById("8").textContent;
  let box9 = document.getElementById("9").textContent;

  if (
    //Horizontal condition
    (box1 !== '' && box1 === box2 && box2 === box3) ||
    (box4 !== '' && box4 === box5 && box5 === box6) ||
    (box7 !== '' && box7 === box8 && box8 === box9) ||
    //Vertical Conditon
    (box1 !== '' && box1 === box4 && box4 === box7) ||
    (box2 !== '' && box2 === box5 && box5 === box8) ||
    (box3 !== '' && box3 === box6 && box6 === box9) ||
    //Diagonal Conditon
    (box1 !== '' && box1 === box5 && box5 === box9) ||
    (box3 !== '' && box3 === box5 && box5 === box7)
  ) {
   document.getElementById('player-move').textContent =`Game Over ,Restart Your Game`
   endGame();
   restartGame();
  } else {
    document.getElementById('player-move').textContent=`Turn Player${currentPlayer} Move!`
  }
  
}


function endGame(){
    boardClasses.forEach((value) =>{
        value.disabled =true;
    })
}


function restartGame(){
    let button = document.getElementById('restart-button');
    button.addEventListener('click',function(){
        boardClasses.forEach((boardClass) =>{
            boardClass.textContent ='';
            boardClass.disabled =false;
          
        });
    });
}

//SVG is used for the draw the line such that straight , or other directions
<svg height='210' width='500'>

<line x1='0' y1='200' style='stroke:rgb(255,0,0); stroke-width:2' />
</svg>