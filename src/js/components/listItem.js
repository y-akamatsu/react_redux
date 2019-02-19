import React from "react";

export default class ListItem extends React.Component {

  onChangeCheckBox(event) {
    console.log("onChangeCheckBox");
    this.props.completeTodo("test");
  }

  render() {
    return (
      <li className="todo-list-item">
        <input type="checkbox"
          onChange={this.onChangeCheckBox.bind(this)}/>
        {this.props.data.label}
      </li>
    )
  }
}