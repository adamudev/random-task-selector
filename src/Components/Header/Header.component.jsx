import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.handlePickTask} disabled={!props.hasTasks}>
        Pick a Task
      </button>
    </div>
  );
};

export default Header;
