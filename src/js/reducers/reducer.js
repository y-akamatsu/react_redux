import { todoActionNames } from "../actions/todoActions";
import _ from "loadash";

const initialState = {
  groupList: [
    {
      id: "inbox",
      label: "受信箱"
    },
    {
      id: "group-1",
      label: "グループ１"
    }
  ],
  todoList: {
    "inbox": [
      {
        id: "item-1",
        label: "Todo1",
        completed: false
      },
      {
        id: "item-2",
        label: "Todo2",
        completed: false
      }
    ],
    "group-1": [
      {
        id: "item-3",
        label: "Todo3",
        completed: false
      },
      {
        id: "item-4",
        label: "Todo4",
        completed: false
      }
    ]
  },
  todoCount: 4,
  groupCount: 1,
  selectedGroup: "group-1"
}

const reducer = (state = initialState, action) => {
  let _state = {};
  let todoList = [];
  switch (action.type) {
    case todoActionNames.ADD_TODO:
      _state = _.clonedeep(state);
      _state.todoCount++;
      todoList = _state.todoList[_state.selectedGroup];
      let todoItem = {
        id: "item-" + _state.todoCount,
        label: action.payload.data,
        completed: false
      }
      todoList.push(todoItem);
      return _state;
    case todoActionNames.COMPLETE_TODO:
      _state = _.clonedeep(state);
      todoList = _state.todoList[_state.selectedGroup];
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === action.payload.id) {
          todoList[i].completed = true;
          break;
        }
      }
      return _state;
    case todoActionNames.DELETE_TODO:
      _state = _.clonedeep(state);
      todoList = _state.todoList[_state.selectedGroup];
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === action.payload.id) {
          todoList.splice(i, 1);
          break;
        }
      }
      return _state;
    default:
      return state;
  }
}

export default reducer;