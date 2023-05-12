import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import setupStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={setupStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
);
