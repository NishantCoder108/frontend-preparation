import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <p>this is simple </p>
      <p>Card of blog </p>

      <Link to="./dashboard">
        <p className="text"> read more</p>
      </Link>
    </div>
  );
}

export default Card;
