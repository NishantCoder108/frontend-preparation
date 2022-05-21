import axios from "axios";
import { useEffect, useState } from "react";
import AddBooks from "./AddBooks";
import "./App.css";
import List from "./List";
import Nav from "./Nav";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    await axios.get(url).then((result) => setState(result));
  };

  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <List state={state} />
        <AddBooks />
      </div>
    </div>
  );
}

export default App;
