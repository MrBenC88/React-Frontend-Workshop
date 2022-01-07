import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Note that the entry point of the program is index.html which is found in the /public folder
 * We render our React element (<App/>) into the DOM. In this case, we render a root DOM because everything inside will be managed by React DOM.
 * Documentation: https://reactjs.org/docs/rendering-elements.html
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
