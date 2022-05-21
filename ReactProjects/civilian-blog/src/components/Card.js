import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";


function Card({ title,topic }) {
  const navigate =useNavigate();
  return (
    <div onClick={() =>navigate(topic)} className="card">
      <h3 className="card_title">{title}</h3>
    </div>
  );
}

export default Card;
