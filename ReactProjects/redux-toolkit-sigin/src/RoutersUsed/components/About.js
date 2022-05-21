import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
function About() {
  return (
    <div className="about">
      <h1> This is About Page</h1> <Link to="/"> Go to Home</Link> <br />
      <Link to="/dashboard"> Go to Dashboard</Link>
    </div>
  );
}

export default About;
