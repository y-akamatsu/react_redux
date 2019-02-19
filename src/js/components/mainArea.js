import React from "react";
import Header from "./header";
import Footer from "./footer";
import ListItem from "./listItem";

export default class MainArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: "item-1",
          label: "Todo1",
        },
        {
          id: "item-2",
          label: "Todo2",
        },
      ],
      todoInputValue: ""
    }
  }


  onChangeTodoInput(event) {
    console.log("onChangeTodoInput", event.target.value);
    this.setState({ todoInputValue: event.target.value });
  }

  onClickAddButton(event) {
    let addItem = { label: this.state.todoInputValue };
    let todos = this.state.todos.slice();
    todos.push(addItem);

    this.setState({
      todos: todos,
      todoInputValue: ""
    });
  }

  onCompleteTodo(data) {
    console.log("onCompleteTodo", data);
  }


  renderTodoItems() {
    let todoItemDom = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      let todoItem = <ListItem
                      key={"item-"+i}
                      data={this.state.todos[i]}
                      completeTodo={this.onCompleteTodo}
                    />;
      todoItemDom.push(todoItem);
    }
    return todoItemDom;
  }

  render() {
    return (
      <div className="main-area">
        <Header />
        <main className="list-area">
          <div className="todo-input-area">
            <input type="text"
              className="todo-input"
              placeholder="todoを追加"
              onChange={this.onChangeTodoInput.bind(this)} />
            <button className="add-button"
              onClick={this.onClickAddButton.bind(this)}>登録</button>
          </div>
          <ul className="todo-list">
            {this.renderTodoItems()}
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}
