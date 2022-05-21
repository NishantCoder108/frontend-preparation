import axios from "axios";
import React, { useState } from "react";
import "./AddBooks.css";
function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const addBook = (e) => {
    // e.preventDefault();
    let formJSON = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };

    const url = "http://localhost:3000/books";
    axios.post(url, formJSON).then((res) => console.log(res)).catch((err) => console.log(err));
   
  };

  return (
    <div className="addBooks">
      <h1>AddBooks</h1>
      <form>
        <label className="addBooks_label"> Title :</label>
        <br />
        <input
          className="addBooks_input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label className="addBooks_label"> Author :</label>
        <br />
        <input
          className="addBooks_input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <label className="addBooks_label"> Genre :</label>
        <br />
        <input
          className="addBooks_input"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />

        <label className="addBooks_label"> Summary :</label>
        <br />
        <input
          className="addBooks_input"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />
        <button onClick={addBook} type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
