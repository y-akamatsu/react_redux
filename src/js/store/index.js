import { createStore, composer, applyMiddleware } from "redux"; //createStore applyMiddleware をimport
import { createLogger } from "redux-logger"; 
import reducer from "../reducers/reducer";

export default function configerStore() {
  const logger = createLogger();
  //enhancer = コンポーネントを受け取ってコンポーネントを返す関数
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composer;

  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(logger))
  );

  return store;
}