import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import {
  positions,
  transitions,
  Provider as AleartProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
root.render(
  <Provider store={store}>
    <AleartProvider template={AlertTemplate} {...options}>
      <App />
    </AleartProvider>
  </Provider>
);
