import React from "react";
import "./App.css";
import Provider from "./provider";
import Context from "./context";
import context from "./context";

function Agents() {
  return <AgentBonds />;
}

function AgentBonds() {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <h3>Agent Information</h3>
          <p>Mission Name {context.data.mname}</p>
          <h2>Mission Status:{context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to Accept</button>
        </>
      )}
    </Context.Consumer>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
}

export default App;
