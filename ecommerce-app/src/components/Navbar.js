import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("username"));
  const [userName, setUserName] = useState("User");

 useEffect(()=>{
     if (user != undefined) {
      setUserName(user)
    
  } else {
    setUserName("User");
  }
 },[userName])
  

  function logout() {
    localStorage.getItem();
  }

  function logout() {
    let user = localStorage.removeItem("username");
    setUserName(user)
    navigate("/");
    // window.reload()
  }
  return (
    <div className="nav">
      <h2>
        {" "}
        <strong>Z2T</strong>
      </h2>
      <div>
        <h3>Hi , {userName}</h3>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
