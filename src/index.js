import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "@components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
