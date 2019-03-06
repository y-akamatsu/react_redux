import React from "react";
import ReactDOM from "react-dom";
import { createStore, composer, applyMiddleware } from "redux"; //createStore applyMiddleware をimport
import { createLogger } from "redux-logger"; 
//import App from "./components/app";
import MainArea from './components/mainArea';

const reducer = (state = { text: "text" }, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return Object.assign({}, state, { text: action.text });
    default:
      return state;
  }
}

const logger = createLogger();
//enhancer = コンポーネントを受け取ってコンポーネントを返す関数
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composer;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(logger))
);

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
    <MainArea
      text={state.text}
      onChange={onChange} />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);