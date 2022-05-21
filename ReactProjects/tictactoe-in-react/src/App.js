import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodoText(event.target.value);
    console.log(todoText);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((arr) => [...arr, todoText]);
    setTodoText('')
  };

  const deleteToDo = (key) => {
    todoList.splice(key, 1);
    setTodoList((arr) => [...arr]);
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>To Do</h1>
      </header>

      <form>
        <label className="todo-label">What do you want today</label>
        <input value={todoText} onChange={handleChange} type="text" />

        <button onClick={handleSubmit} className="button">
          Submit
        </button>
      </form>
      {todoList.map((td, index) => (
        <div key={index} className="todo">
          <br />
          <input type="checkbox" />
          <label>{td}</label>
          <IconButton onClick={() => deleteToDo(index)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default App;
//material ui core
//material ui icons
// Create a controlled form that accepts employee details and displays them based on validations
