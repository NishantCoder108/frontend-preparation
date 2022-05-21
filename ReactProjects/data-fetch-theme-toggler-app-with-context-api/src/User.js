import React, { useContext } from "react";
import { Context, ThemeContext } from "./ThemeProvider";

function User() {
  //  console.log(Context())
  const { toggle, toggleFunction } = Context();
  console.log(toggle);
  return (
    <div style={{border:'2px solid grey',paddingLeft:'30px',height:'600px' ,width:"98vw" , backgroundColor: toggle ?"pink" : "black"}}>
      <h3>Context Api</h3>
      <button onClick={toggleFunction}>Change the Theme</button>
    </div>
  );
}

export default User;
