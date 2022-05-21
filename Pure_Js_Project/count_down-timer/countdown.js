let inputDateValue = 0;
let leftDateTime = 0;
let timerId = 0;
const inputDate = document.getElementById("input-date");
const clickBtn = document.querySelector("#click");

const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

clickBtn.addEventListener("click", inputFunc);
function inputFunc() {
  const nowDateTime = new Date().getTime();

  inputDateValue = inputDate.value;
  if (inputDateValue === "") {
    inputDateValue = 0;
  }

//   console.log("inputDateValue", inputDateValue);
  let inputDateTime = new Date(inputDateValue).getTime();
  leftDateTime = inputDateTime - nowDateTime;
  
  // console.log(leftDateTime);
  if (leftDateTime < 0) {
    cancelAnimationFrame(timerId);
  } else if (leftDateTime > 0) {
    updateDateTime(leftDateTime);
    timerId = requestAnimationFrame(inputFunc);
  }
}

function updateDateTime(leftTime) {
  const secondsElapsed = leftTime / 1000;
  const minElapsed = secondsElapsed / 60;
  const hrsElapsed = minElapsed / 60;
  const daysElapsed = hrsElapsed / 24;

  const secondsText = format(Math.floor(secondsElapsed) % 60, 2);
  const minText = format(Math.floor(minElapsed) % 60, 2);
  const hrsText = format(Math.floor(hrsElapsed) % 24, 2);
  const daysText = format(Math.floor(daysElapsed), 3);

  days.textContent = daysText;
  hrs.textContent = hrsText;
  mins.textContent = minText;
  seconds.textContent = secondsText;
 
 
}

function format(num, desireLength) {
  const numString = String(num);
  if (numString.length > desireLength) {
    return numString.slice(0, desireLength);
  }
  return numString.padStart(desireLength, "0");
}


