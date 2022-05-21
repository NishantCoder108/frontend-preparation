import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Dashboard.css";
function Dashboard() {
  const navigate = useNavigate();

  function navigateHome() {
    // navigate("/");
    navigate("/", { replace: true });
  }
  return (
    <div className="dashboard">
      <h1> This is Dashboard Page</h1>
      <button onClick={navigateHome}>Go to Home </button>
      <div className="dashboard-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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

export default Dashboard;
