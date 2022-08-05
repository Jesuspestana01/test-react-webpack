import ReactDOM from "react-dom/client"; // In order to use React 18 instead of React 17 render. method

// Importing layout to be render with react routers*/

import Layout from "./layout.js";

// Importing bootstrap to our bundle and general styles .scss

import "bootstrap";
import "../styles/index.scss";
import React from "react";

ReactDOM.createRoot(
    document.getElementById("root")
    )
    .render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
