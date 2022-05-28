import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  function onsubmit() {
    localStorage.setItem("username", JSON.stringify(username));

    navigate("/home");
    window.document.location.reload();
  }

  return (
    <div >
      <form className="loginPage" onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Username e.g. john123"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          minLength={5}
        />
        <button type="submit">Login | Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
