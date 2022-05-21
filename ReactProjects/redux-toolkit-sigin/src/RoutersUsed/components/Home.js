import React from "react";
import Card from "./Card";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h4> Welcome to the Home</h4>
      <h1> Welcome to my Blog App</h1>

      <div className="home-cards">
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
     
      </div>
    </div>
  );
}

export default Home;
