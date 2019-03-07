import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import configerStore from "./store/index";

const store = configerStore();

const onChange = (text) => {
  const action = {
    type: "CHANGE_TEXT",
    text: text
  }
  store.dispatch(action);
}

const render = () => {
  const state = store.getState();
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);