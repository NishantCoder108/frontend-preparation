import axios from "axios";
import React from "react";
import "./Card.css";
function Card({item,title,id,author,genre,summary}) {

  function updateFunc(){
    const url =`http://localhost:3000/books/${id}`;
    axios.put(url,{title :"xyz"}).then((res) => console.log(res))
    window.location.reload()

  }

  function deleteFunc(){
    const url =`http://localhost:3000/books/${id}`
    axios.delete(url).then((res) => console.log(res)).catch(err => err)
    window.location.reload()
  }
    console.log(title)
  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <div className="card_description">
        <p> Author :{author}</p>
        <p>Genre : {genre}</p>
      </div>
      <p className="card_summary">{summary}</p>
      <div className="card_buttons">
        <button onClick={updateFunc} className="button">Edit</button>
        <button onClick={deleteFunc} className="button">Delete</button>
      </div>
     
    </div>
  );
}

export default Card;
