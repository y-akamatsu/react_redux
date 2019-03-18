import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { groupReducer } from "./groupReducer";
import _ from "lodash"; //ディープコピーさせる

const reducer = combineReducers({
  todoReducer,
  groupReducer
})

export default reducer