let x = 0;
let arr = Array();

function addElement(){
    array[x] = document.getElementById('t1').ariaValueMax;
    alert(`Element ${array[x]} Added at index ${x}`)

    x++;

    document.getElementById('t1').value='';
    console.log(array)
}



function display(){
    let output = ''
    for(var i = 0; i<array.length; i++){
        output = `Element ${i}  = ${array[i]} <br>`
    }

    document.getElementById("Result").innerHTML = output
}