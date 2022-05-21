import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import RoutersFile from "./RoutersUsed/RoutersFile";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}

      <Auth0Provider
        domain="dev-b1uzk139.us.auth0.com"
        clientId="PXaNhMrzMydzAYJHIMh1WOzZDEfM8CaS"
        redirectUri={window.location.origin}
      >
        <RoutersFile />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
