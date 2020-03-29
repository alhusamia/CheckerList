import React from "react";
import { check, delet } from "../redux/actions";
import { connect } from "react-redux";

const CheckRow = props => {
  return (
    <div className="Row">
      <div>
        {/* <input
          id={`_checkbox ${props.todo.title}`}
          className="checkbox"
          type="checkbox"
          checked={props.todo.checked}
          onChange={() => props.check(props.todo)}
        />
        <label for={`_checkbox ${props.todo.title}`}>
          <div id="tick_mark"></div>
        </label> */}
      </div>
      <div className={props.todo.checked === true ? "todochecked" : "notchecked"} onClick={() => props.check(props.todo)}>
        
          {props.todo.title}
       
 
        <i onClick={() => props.delet(props.todo)}
          className="fa fa-trash lg"
          style={{
            fontSize: "30px",
            color: "#000000",
            cursor: "pointer",
            float:"right"
          }}
        ></i>
    
      </div>
          <div></div>
      {/* <button onClick={() => props.delet(props.todo)}>Delete</button> */}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  check: todo => dispatch(check(todo)),
  delet: todo => dispatch(delet(todo))
});

export default connect(null, mapDispatchToProps)(CheckRow);
