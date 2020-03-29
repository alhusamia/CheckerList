import React from "react";
import CheckList from "./component/CheckList";
import DoneList from "./component/DoneList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <div></div>
        <div className="Home_col">
          <div>
            <CheckList />
          </div>
          <div>
            <DoneList />
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
