import React, { useContext } from "react";

const UserContext = React.createContext();

function ContextApiPrac() {
  return (
    <UserContext.Provider value={
        {
            name:"James Bond",
            age:53,
        }
    }>
      <User />
    </UserContext.Provider>
  );
}
function User() {
  //   const context = React.useContext(UserContext);
  //   return <h1>My Name is {context} </h1>;

  return <UserChild />;
}

function UserChild() {
    const context = useContext(UserContext)
  return <h1>My name is { context.name}</h1>;
}
export default ContextApiPrac;

/*
Flaw of Context Api

-It cannot update the data. but only pass the data

  Redux
  -State Management Tool
      -Add ,Update ,Delete


React Context Api + useReducer =REDUX      
*/
