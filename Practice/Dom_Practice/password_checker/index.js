function checkPassword(){
    const password =document.getElementById('password').value;

    const regex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const styles = {
       
        backgroundColor: 'red'
    };
    if(password.length < 5){
        document.getElementById('password-indicator').setAttribute("style", "width: 15vw;  background-color: red;transition:1s");
        document.getElementById('password-type').innerText='Password Strength : Weak'
        document.getElementById('password-hint').innerText='You must have more than 5 character';
    }
    else if(regex.test(password)){
        document.getElementById('password-indicator').setAttribute("style", "width: 30vw;  background-color: green; transition:.5s");
        document.getElementById('password-type').innerText='Password Strength : Strong'
        document.getElementById('password-hint').innerText='';
    }
    else{
        document.getElementById('password-indicator').setAttribute("style", "width: 20vw;  background-color: orange;transition:.5s");
        document.getElementById('password-type').innerText='Password Strength : Medium'
        document.getElementById('password-hint').innerText='You must have at least one Uppercase[ABC],Lowercase[abc],Numbers[0-9],Symbols[#?!@$%^&*-]';
    }
}











/*
onchange =when wil call input value will be lost,focus of input will lost

 oninput =it trigger on every character 

regex determine the password 
var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
regex.test('abc')
regex.test('Relevel@1')


when password is weak
when less than 5 characters

moderate---
more than 5 character but without an uppercase ,lowercase ,

 */

