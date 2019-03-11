import React from "react";
import SideArea from "..containers/sideArea";
import MainArea from "..containers/mainArea";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          },
          {
            id: "item-5",
            label: "Todo5",
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
          },
          {
            id: "item-5",
            label: "Todo5",
            completed: false
          }
        ]
      },
      todoCount: 4,
      groupCount: 1,
      selectedGroup: "group-1"
    }
  }


  onAddTodo(label) {
   let _state = Object.assign({}, this.state);
   _state.todoCount++;
   let todoList = _state.todoList[_state.selectedGroup];
   let todoItem = {
     id: "item-" + _state.todoCount,
     label: label,
     completed: false
   }
   todoList.push(todoItem);
   this.setState(_state);
  }

  onCompleteTodo(id) {
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        todoList[i].completed = true;
        break;
      }
    }
    this.setState(_state);
  }

  onDeleteTodo(id) {
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        todoList.splice(i, 1);
        break;
      }
    }
    this.setState(_state);
  }

  onSelectGroup(id) { //選択したグループの処理
    console.log("selectedGroup", id)
    this.setState({selectedGroup: id}); //クリックしたグループのidを表示させる
  }

  onAddGroup(groupName) {
    let _state = Object.assign({}, this.state);
    _state.groupCount++;
    let groupId = "group-" + _state.groupCount;
    let groupItem = {
      id: groupId,
      label: groupName
    }
    _state.groupList.push(groupItem);

    _state.todoList[groupId] = [];
    this.setState(_state);
  }

  onEditGroup(id, groupName) {
    let _state = Object.assign({}, this.state);
    for (let i = 0; i < this.state.groupList.length; i++) {
      if (this.state.groupList[i].id === id) {
        this.state.groupList[i].label = groupName;
        break;
      }
    }
    this.setState(_state);
  }

  onDeleteGroup(id) {
    let _state = Object.assign({}, this.state);
    for (let i = 0; i < this.state.groupList.length; i++) {
      if (this.state.groupList[i].id === id) {
        this.state.groupList.splice(i, 1);
        break;
      }
    }
    delete this.state.todoList[id];
    this.setState(_state);
  }

  render() {
    let groupName = "";
    for (let i = 0; i < this.state.groupList.length; i++) {
      if (this.state.groupList[i].id === this.state.selectedGroup ){
        groupName = this.state.groupList[i].label;
        break;
      }
    }
    
    return (
      <div className="wrap">
        <SideArea
          onSelect={this.onSelectGroup.bind(this)}
          onAddGroup={this.onAddGroup.bind(this)}
          onEditGroup={this.onEditGroup.bind(this)}
          onDeleteGroup={this.onDeleteGroup.bind(this)}/>
        <MainArea/>
      </div>
    )
  }
}