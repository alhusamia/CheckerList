import React, { Component } from "react";
import CheckTable from "./CheckTable";
import { delete_all } from "../redux/actions";
import { connect } from "react-redux";

class CheckList extends Component {
  render() {
    const filtered = this.props.todos.filter(todo => todo.checked === true);

    return (
      <div>
        <div className={filtered.length ? "Title_checked" : "Title_off"}>
          <span>
            <h1>Done</h1>
          </span>
          <div  onClick={() => this.props.delete_all()}>
           <img className="delete-all" src={"https://cdn.onlinewebfonts.com/svg/img_476636.png"} width="40px" height="40px" alt="delete all" />
          </div>
          {/* <button onClick={() => this.props.delete_all()}>DELETE ALL</button> */}
        </div>

        <CheckTable todos={filtered} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todosState.todos
});
const mapDispatchToProps = dispatch => ({
  delete_all: () => dispatch(delete_all())
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckList);
