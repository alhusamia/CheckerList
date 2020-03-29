import React, { Component } from "react";
import { add } from "../redux/actions";
import { connect } from "react-redux";

class ADD extends Component {
  state = {
    store: ""
  };

  
  handelChange = event => {    
    this.setState({ store: event.target.value });
  };


  onSubmitForm = event => {
    event.preventDefault();
    this.props.add(this.state.store);
    this.setState({ store: "" });

  //   const Items = {title:this.state.store, checked:false};

  //   if (localStorage.getItem("items") == null) {
  //     var items = [];
  //     items.push(Items);
  //     localStorage.setItem("items", JSON.stringify(items));
  //   } else {
  //     var items = JSON.parse(localStorage.getItem("items"));
  //     items.push(Items);
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }
  // };
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-12 col-xl-12">
        <div className="form-group col-lg-12 col-12 ">
          <form onSubmit={this.onSubmitForm}>
            <div className="input-group my-3">
              <input
                className="form-control"
                type="text"
                value={this.state.store}
                onChange={this.handelChange}
                placeholder="I need to ..."
              />
              <button
                typeof="submit"
              
              >
                <i
                  className="fa fa-plus lg"
                  style={{
                    fontSize: "30px",
                    color: "#000000",
                    cursor: "pointer"
                  }}
                ></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(add(todo))
});
export default connect(null, mapDispatchToProps)(ADD);
