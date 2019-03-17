import { todoActionNames } from "../actions/todoActions";
import { groupActionNames } from "../actions/groupActions";
import _ from "lodash"; //ディープコピーさせる

const initialState = {
  groupList: [
    {
      id: "inbox",
      label: "受信箱"
    },
    {
      id: "group-1",
      label: "グループ１"
    },
    {
      id: "group-2",
      label: "グループ2"
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
  let _state = _.cloneDeep(state);
  let todoList = [];
  switch (action.type) {
    case todoActionNames.ADD_TODO:
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
      todoList = _state.todoList[_state.selectedGroup];
      for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].id == action.payload.id) {
          todoList[i].completed = true;
          break;
        }
      }
      return _state;
    case todoActionNames.DELETE_TODO:
      todoList = _state.todoList[_state.selectedGroup];
      for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].id == action.payload.id) {
          todoList.splice(i, 1);
          break;
        }
      }
      return _state;
    case groupActionNames.ADD_GROUP:
      _state.groupCount++;
      let groupId = "group-" + _state.groupCount;
      let groupItem = {
        id: groupId,
        label: action.payload.data
      }
      _state.groupList.push(groupItem);
      _state.todoList[groupId] = [];
      return _state;
    default:
      return state;
  }
}

export default reducer;