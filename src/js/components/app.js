import React from "react";
import SideArea from "./sideArea";
import MainArea from "./mainArea";

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
      selectedGroup: "group-1"
    }
  }

  onSelectGroup(id) { //選択したグループの処理
    this.setState({selectedGroup: id}); //クリックしたグループのidを表示させる
  }

  render() {
    return (
      <div className="wrap">
        <SideArea
          groupList={this.state.groupList}
          onSelect={this.onSelectGroup.bind(this)}/>
        <MainArea
          todoList={this.state.todoList[this.state.selectedGroup]} />
      </div>
    )
  }
}