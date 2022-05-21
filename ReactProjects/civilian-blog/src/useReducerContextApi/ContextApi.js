import React, { createContext, useReducer } from "react";
import Value from "../Value";

// create a context data layer
export const CountContext = createContext();

//reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ContextApi() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <Value/>
    </CountContext.Provider>
  );
}

export default ContextApi;
