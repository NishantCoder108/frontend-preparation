import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./ThemeProvider";
import DataRetrival from "./Data-Retrivel/dataRetrival";
import DataAxios from "./Data-Retrivel/data-axios";
ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider>np
      <App />

    </ThemeProvider> 
    <DataRetrival/>*/}
    <DataAxios/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
