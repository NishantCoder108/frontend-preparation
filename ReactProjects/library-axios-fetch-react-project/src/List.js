import React from "react";
import Card from "./Card";
import "./List.css";
function List({ state }) {
  console.log(state);

  return (
    <div className="list">
      {
        state.data?.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            author={item.author}
            genre={item.genre}
            summary={item.summary}
          />
        ))}
    </div>
  );
}

export default List;
