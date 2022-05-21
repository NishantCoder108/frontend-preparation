import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
function GetData() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="container">
      {!user ? (
        "No User Found"
      ) : (
        <>
          <h1>User : {user?.user_name}</h1>
          <h1>Email : {user?.user_email}</h1>
          <button onClick={logOut}>Logout</button>
        </>
      )}
    </div>
  );
}

export default GetData;
