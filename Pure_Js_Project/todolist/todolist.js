const todoList =document.getElementById('todo-list');
const input = document.getElementById('todo-input');//when no input then button is disabled.
const addButton = document.getElementById('add-button');

//'change' event only run when some change is happened ,if we write in input area and if you to remove event or disabled event ,in case you can click outside the input box then it wll work fine. 
//'input' event when execute ,when keystroke is clicked
//So in this scenerio ,we use 'input' method
addButton.addEventListener('click' , onClickAdd);
input.addEventListener('input', onTypeTodo);


//on click Add something
function onClickAdd(){
    const li = createListItem(input.value);
    todoList.appendChild(li);
    input.value = '';      //when input value is added ,then value will be removed
    addButton.disabled = true;
}


function onTypeTodo() {
    addButton.disabled = input.value.length === 0 ; //if value in input then button will be disabled.
}


function createListItem(name){
const li = document.createElement('li');

const heading =document.createElement('h2');
heading.textContent = name;

const deleteButton = document.createElement('button');
deleteButton.textContent = 'X' ;
deleteButton.classList.add('delete-button');

//delete click event
deleteButton.addEventListener('click',onClickDelete);


li.appendChild(heading);
li.appendChild(deleteButton);
return li;
}


function onClickDelete(){
    this.parentNode.remove();  //it remove that element from the nodes
}



