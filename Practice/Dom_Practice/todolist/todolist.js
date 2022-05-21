
function addParaText() {
  let inputValue = document.getElementById("input");//here , innerText or textContent will not work. value will be shown.
  const AddPara = document.getElementById("addPara");

  const fragment = document.createDocumentFragment(); //create the fragment
  const h3 = document.createElement("h3");//create element of h3
  const removeButton =document.createElement('button')

  h3.textContent = inputValue.value; //h3 textcontent change to the value  and it targeted with the value
  h3.setAttribute('class','paradesign')
  fragment.append(h3); //h3 appended to the fragment
// fragment.append(removeButton)

  if(h3.textContent){  //value in input area then append
      AddPara.append(fragment); //Append to the fragment 
      
      
  }

  inputValue.value = ""; //removing the text from inside the input value
}
