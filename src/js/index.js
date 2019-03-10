import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react\redux";
import App from "./components/app";
import configerStore from "./store/index";

const store = configerStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
