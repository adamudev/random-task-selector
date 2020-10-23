import React from "react";

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <button
      className="main"
      onClick={props.handlePickTask}
      disabled={!props.hasTasks}
    >
      Pick a Task
    </button>
  </div>
);

export default Header;
