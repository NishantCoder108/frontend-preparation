const radius = document.getElementById("radius");
const result = document.getElementById('result');
let count = 0;


function diameterFunc(r) {
  return 2 * r;
}

function circumferenceFunc(r) {
  return 2 * Math.PI * r;
}

function areaOfCircle(r) {
  return Math.PI * r * r;
}

const btn = document.querySelectorAll("button");
btn.forEach((calc) => {
  calc.addEventListener("click", () => {

    if(calc.innerText ==='Diameter'){
        let diaRes = diameterFunc(radius.value);
        console.log(diaRes)
        result.value = diaRes
    }
    if(calc.innerText ==='Circumference of Circle'){
        let circumferenceRes =circumferenceFunc(radius.value);
        result.value = circumferenceRes;
    }
    if(calc.innerText ==='Area of Circle'){
       let areaRes = areaOfCircle(radius.value);
       result.value = areaRes;
    }
    if(calc.innerText ==='Reset'){
     radius.value ='';
     result.value = '';

     count +=1;
     document.getElementById('numOfClickReset').textContent = `Reset is click  ${count} times.`;
    }
   
  });
});


