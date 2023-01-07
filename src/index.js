import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/fonts/stylesheet.css";
import "./assets/styles/light-mode-variables.css";
import "./assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
