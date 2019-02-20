import React from "react";

export default class ListItem extends React.Component {

  onChangeCheckBox(event) {
    console.log("onChangeCheckBox");
    this.props.completeTodo(event.target.value);
  }

  onClickDeleteButton(event) {
    console.log("onDeleteButton");
    this.props.deleteTodo(this.props.data.id);
  }

  render() {
    return (
      <li className="todo-list-item">
        <input type="checkbox"
          value={this.props.data.id}
          onChange={this.onChangeCheckBox.bind(this)}/>
        {this.props.data.label}
        <button
        className="delete-button"
          onClick={this.onClickDeleteButton.bind(this)}>×</button>
      </li>
    )
  }
}