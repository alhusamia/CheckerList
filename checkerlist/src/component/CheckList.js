import React, { Component } from "react";
import CheckTable from "./CheckTable";
import ADD from "./ADD";

import { connect } from "react-redux";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentWillMount() {
    const items = localStorage.getItem("items");
    const parsedList = JSON.parse(items);
    if (items == null) {
      return false;
    } else {
      this.setState({
        items: parsedList
      });
      console.log(this.state.items);
    }
  }

  render() {
    console.log(this.props.todos, "toooooodooooooo");
    const filtered = this.props.todos.filter(todo => todo.checked === false);


    return (
      <div>
        <div className={filtered.length ?"Title_notchechecked":"Title_off"}>
          <h1>To Do</h1>
          <ADD />
        </div>

        <CheckTable
          todos={filtered}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todosState.todos
});
export default connect(mapStateToProps)(CheckList);
